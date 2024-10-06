"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
function updatedUser(updatedProps) {
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}
updatedUser({ name: "Shubham", age: 22, email: "abc" });
function updatedUser1(updatedProps) {
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}
updatedUser1({ name: "Shubham" });
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
//   5 -- > Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
