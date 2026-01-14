const users = [
    {name: "Ana", role: "admin" },
    {name: "Carlos", role: "user" },
    {name: "Maria", role: "admin" },
    {name: "João", role: "user" }
];

const byGroups = users.reduce((acc, user) => {
    
    return acc;
}, {});

console.log(byGroups);
