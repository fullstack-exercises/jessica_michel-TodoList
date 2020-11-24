import { getData, postTodo, deleteTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo__list');
const formTodo = document.querySelector('.todo__form');
const inputTodo = document.querySelector('.input-todo');

const addToDoList = async() => {
    const data = await getData();
    const getTodo = data.map(item => {
        createToDo(item);
    });
}
addToDoList();

const createToDo = (item) => {
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
    label.contentEditable = true;
    label.classList.add('todo__single');

    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('far', 'fa-trash-alt', 'todo__delete');

    toDoList.insertAdjacentElement('beforeend', form);
    form.append(newCheckbox, label, deleteBtn);
}

const postNewTodo = async() => {
    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();

        let item = inputTodo.value;
        console.log(inputTodo.value);

        createToDo(item);
        const data = await postTodo({ description: item, done: false });
    });
}
postNewTodo();

const deleteToDoItem = async(event) => {
    const deleteBtn = event.target;
    if (event.target && event.target.classList.contains('todo__delete')) {
        event.target.parentNode.classList.add('delete');
        const targetID = event.target.parentNode.id;
        const data = await deleteTodo(targetID);
    }
}
toDoList.addEventListener('click', deleteToDoItem);