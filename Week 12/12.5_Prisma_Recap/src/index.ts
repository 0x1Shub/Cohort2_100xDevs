import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 1 --> Insert Data

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const response = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     });
//     console.log(response);
// }

// insertUser('jonnny', 'password', 'John123', 'Do123e');

// 2 --> Create Todos

async function createTodo(userId: number, title: string, description: string) {
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        userId
      },
    });
    console.log(todo);
  
}
  
createTodo(1, "go to gym", "go to gym and do 10 pushups");

// 3 --> Get Todos

async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);

// 4 --> Get Todos and User Details

async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);