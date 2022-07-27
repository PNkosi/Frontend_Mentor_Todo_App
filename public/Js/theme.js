const changeThemeBtn = document.querySelector('.theme-btn')
const body = document.querySelector('body')
const banner = document.querySelector('.banner')
const todoInput = document.querySelector('.todo-input')
const addTodoBtn = document.querySelector('.add-todo-btn')
const todoContent = document.querySelector('.todo-description')
const themeTodosContainer = document.querySelector('.todos-container')
const todosFilter = document.querySelector('.todos-filter')
const todosController = document.querySelector('.todos-controller')
const extraInfo = document.querySelector('.extra-info')

changeThemeBtn.addEventListener('click', changeTheme)

function changeTheme() {
    body.classList.toggle('light-theme-bg')
    banner.classList.toggle('light-bg-img')
    todoInput.classList.toggle('light-theme-bg')
    addTodoBtn.classList.toggle('light-theme-btn')
    todosFilter.classList.toggle('light-theme-bg')
    themeTodosContainer.classList.toggle('light-theme-bg')
    todosController.classList.toggle('light-theme-bg')
    extraInfo.classList.toggle('light-theme-bg')
    todoContent.classList.toggle('light-theme-color')


}






