import { getData, postTodo, deleteTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo-list');
const formTodo = document.querySelector('.form-todo');
const inputTodo = document.querySelector('.input-todo');
const idTodo = document.getElementsByClassName('id');

// Get data from another file
const addTodo = async() => {
    const data = await getData();
    const getTodo = data.map(item => {
        const todo = item.description;
        let li = document.createElement('li');
        li.setAttribute('id', item._id); // creates ID
        toDoList.appendChild(li);
        li.classList.add('task');
        li.innerHTML = item.description;
    });
}
addTodo();

const createTodo = () => {
    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();
        let valueNewTodo = inputTodo.value;
        console.log(valueNewTodo);
        let li = document.createElement('li');
        toDoList.appendChild(li);
        toDoList.insertAdjacentElement('afterbegin', li);
        li.classList.add('task');
        li.innerHTML = valueNewTodo;
        const data = await postTodo({ description: valueNewTodo, done: false });
    });
}
createTodo();

// const deleteTodo = async() => {
//     const data = await deleteTodo(id);

// }