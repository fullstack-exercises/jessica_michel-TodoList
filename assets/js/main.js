import { getData, postTodo, deleteTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo__list');
const formTodo = document.querySelector('.todo__form');
const inputTodo = document.querySelector('.input-todo');

// Get data from another file
const addTodo = async() => {
    const data = await getData();
    const getTodo = data.map(item => {

        const newform = document.createElement('form');
        newform.setAttribute('id', item._id); // creates ID

        const label = document.createElement('label');
        label.innerHTML = item.description;
        label.classList.add('todo__single');

        toDoList.appendChild(newform);
        newform.appendChild(label);
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