const state = {
    user: {
        name: "Ana",
        age: 25
    },
    tasks: [
        { id: 1, title: "Estudar JS", done: false },
        { id: 2, title: "Treinar", done: true },
        { id: 3, title: "Dormir cedo", done: false }
    ]
    
};

const newState = {
    ...state,    tasks: state.tasks.map((task) => {
        if (task.id === 1) {
            return { ...task, done: true };
        }
    })
}

console.log(state.tasks[0].done);
console.log(newState.tasks[0].done);