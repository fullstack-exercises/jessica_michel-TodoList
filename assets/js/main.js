import { getData, postTodo, deleteTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo__list');
const formTodo = document.querySelector('.todo__form');
const inputTodo = document.querySelector('.input-todo');

const addTodo = async() => {
    const data = await getData();
    const getTodo = data.map(item => {

        const form = document.createElement('form');
        form.setAttribute('id', item._id); // creates ID
        form.classList.add('todo__id');

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.classList.add('.todo__checkbox');
        newCheckbox.id = item.description;

        const label = document.createElement('label');
        label.htmlFor = item.description;
        label.innerHTML = item.description;
        label.classList.add('todo__single');

        const deleteBtn = document.createElement('i');
        deleteBtn.classList.add('far', 'fa-trash-alt', 'todo__delete');

        toDoList.appendChild(form);
        form.append(newCheckbox, label, deleteBtn);

    });
}
addTodo();

const createToDo = async() => {
    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();
        let valueNewTodo = inputTodo.value;

        let li = document.createElement('li');
        toDoList.appendChild(li);
        toDoList.insertAdjacentElement('afterbegin', li);
        li.classList.add('task');
        li.innerHTML = valueNewTodo;
        const data = await postTodo({ description: valueNewTodo, done: false });
    });
}
createToDo();

const deleteToDoItem = async(event) => {
    const deleteBtn = event.target;
    if (event.target && event.target.classList.contains('todo__delete')) {
        event.target.parentNode.classList.add('delete');
        const targetID = event.target.parentNode.id;
        const data = await deleteTodo(targetID);
    }

}
toDoList.addEventListener('click', deleteToDoItem);