interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string,
}

function sumOfAge(user1: User, user2: User){
    return user1.age+user2.age;
}

// const age = sumOfAge({name: "Shubham", age: 22}, {name: "John", age: 25});
// console.log(age);

//1 --> Pick
type UpdatedProps = Pick<User, 'name' | 'age' | 'email'>

function updatedUser(updatedProps: UpdatedProps){
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}

updatedUser({name: "Shubham", age: 22, email: "abc"});

//2 --> Partial
type UpdatedPropsOptional = Partial<UpdatedProps>;
function updatedUser1(updatedProps: UpdatedPropsOptional){
    console.log(`Name: ${updatedProps.name}, Email: ${updatedProps.email}`);
}

updatedUser1({name: "Shubham"});

// 3 --> Readonly

interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.


//   4 --> Record 

interface User1 {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User1>;
  
  const users: Users = {
    'abc123': { id:'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//   5 -- > Map

const usersMap = new Map<string, User1>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }