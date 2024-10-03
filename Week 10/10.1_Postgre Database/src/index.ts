// Write a function to create a users table in your database.

import { Client } from 'pg'
 

// --> For NeonDb Use

// const client = new Client({
//   host: 'my.database-server.com',
//   port: 5334,
//   database: 'database-name',
//   user: 'database-user',
//   password: 'secretpassword!!',
// })

// --> Using Docker Locally

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
  })

client.connect()

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// Async function to insert data into a table
async function insertData() {
    const client = new Client({
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
      password: 'mysecretpassword',
    });
  
    try {
      await client.connect(); // Ensure client connection is established
      const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
      const res = await client.query(insertQuery);
      console.log('Insertion success:', res); // Output insertion result

      // Use parameterized query to prevent SQL injection
    // const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    // const values = [username, email, password];
    // const res = await client.query(insertQuery, values);
    // console.log('Insertion success:', res); // Output insertion result
    } catch (err) {
      console.error('Error during the insertion:', err);
    } finally {
      await client.end(); // Close the client connection
    }
}
  
insertData();