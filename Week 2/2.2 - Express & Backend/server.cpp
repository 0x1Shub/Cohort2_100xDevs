#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>
#include <cstring>

const int PORT = 8080;

int main()
{
    // Create a socket
    int serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket < 0)
    {
        std::cerr << "Error: Could not create socket\n";
        return 1;
    }

    // Bind the socket to the specified port
    struct sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(PORT);
    if (bind(serverSocket, (struct sockaddr *)&serverAddr, sizeof(serverAddr)) < 0)
    {
        std::cerr << "Error: Bind failed\n";
        return 1;
    }

    // Listen for incoming connections
    if (listen(serverSocket, 10) < 0)
    {
        std::cerr << "Error: Listen failed\n";
        return 1;
    }

    std::cout << "Server listening on port " << PORT << std::endl;

    // Accept incoming connections and handle requests
    while (true)
    {
        struct sockaddr_in clientAddr;
        socklen_t clientLen = sizeof(clientAddr);
        int clientSocket = accept(serverSocket, (struct sockaddr *)&clientAddr, &clientLen);
        if (clientSocket < 0)
        {
            std::cerr << "Error: Accept failed\n";
            continue;
        }

        char buffer[1024] = {0};
        int valread = read(clientSocket, buffer, 1024);
        if (valread < 0)
        {
            std::cerr << "Error: Read failed\n";
            close(clientSocket);
            continue;
        }

        // Send HTTP response
        const char *response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, World!";
        send(clientSocket, response, strlen(response), 0);

        close(clientSocket);
    }

    close(serverSocket);
    return 0;
}
