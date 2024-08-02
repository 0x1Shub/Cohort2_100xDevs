// "use client"

import axios from "axios";
import { useEffect } from 'react';
 
async function getUserData(){
  const response = await axios.get("http://localhost:3000/api/user");
  // console.log(response);
  return response.data;
}

// Async component
export default async function Home() {
  const userDetails = await getUserData();
  // useEffect(() => {
  //   getUserData();
  // }, []);
  

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
