import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export function GET() {
    return new Response(
        JSON.stringify({
            email: "abc@gmail.com",
            name: "abc",
        }),
        {
            headers: { "Content-Type": "application/json" }
        }
    );
}


export async function POST(req: NextRequest){
    // extract the body
    const body = await req.json();
    // Store the body in the database
    await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    })
    
    const response = {
        message: "You are logged in!"
      };
    
      // Return the response with JSON content type
      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' }
      });
}