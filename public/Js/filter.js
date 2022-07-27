const todosContainer = document.querySelector('.todos-container')
const todos = document.querySelectorAll('.single-todo');
const completedBtn = document.querySelector('.todos-filter__Completed')
const activeBtn = document.querySelector('.todos-filter__Active')
const allBtn = document.querySelector('.todos-filter__All')

// Displaying completed todos
const showCompleted = () => {
    todos.forEach((todo, index) => {
        const singleTodoContainer = todos[index];
        const todoContent =  todo.children[0].children[1]
        const completedTodo = todoContent.classList.contains('completed');
        
        // Removing hide-todo class from completed todos
        if (completedTodo) 
            singleTodoContainer.classList.remove('hide-todo')

        // Hiding Active todos
        if (!completedTodo) {
            singleTodoContainer.classList.add('hide-todo')
        }
    })
}


// Displaying active todos
const showActive = () => {
    todos.forEach((todo, index) => {
        const singleTodoContainer = todos[index];
        const todoContent =  todo.children[0].children[1]
        const completedTodo = todoContent.classList.contains('completed');
        
        // Removing hide-todo class from Active todos
        if (!completedTodo) 
            singleTodoContainer.classList.remove('hide-todo')

        // Hiding the completed todos
        if (completedTodo) {
            singleTodoContainer.classList.add('hide-todo')
        }
    })
}


// Displaying all todos
const showAll = () => {
    todos.forEach((todo) => {
        if (todo.classList.contains('hide-todo'))
            todo.classList.remove('hide-todo')
    })
}


// Event Listners
completedBtn.addEventListener('click', showCompleted)
activeBtn.addEventListener('click', showActive)
allBtn.addEventListener('click', showAll)


