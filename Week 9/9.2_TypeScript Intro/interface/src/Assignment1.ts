interface User {
	firstName: string;
	lastName: string;
	email?: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

function greet(user: User){
    console.log("Hii there " + user.firstName);
}

isLegal({
    firstName: "John",
    lastName: "Doe",
    email: "abc@gmail.com",
    age: 22
})