
import axios from "axios";

async function fetchData(){
    const response = await axios.get('http://localhost:3000/user');
    console.log("Response is: " + JSON.stringify(response.data));
    return response;
}

export default async function User(){
    
    const data = await fetchData();

    return (
        <div>
           {data.name}
           {data.email}
        </div>
    )
}