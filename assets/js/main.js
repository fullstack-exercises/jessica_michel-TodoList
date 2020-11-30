import { getData, postTodo, deleteTodo, updateTodo } from './api-client.js';

const container = document.querySelector('.container');
const toDoList = document.querySelector('.todo__list');
const formTodo = document.querySelector('.todo__form');
const inputTodo = document.querySelector('.todo__input');

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
    console.log(form.setAttribute('id', item._id));
    form.classList.add('todo__id');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.add('todo__checkbox');
    newCheckbox.id = item.description;

    const label = document.createElement('label');
    label.htmlFor = item.description;
    label.innerHTML = item.description;
    label.contentEditable = true;
    label.classList.add('todo__single');

    if (item.done === true) {
        label.style.textDecoration = "line-through";
    }

    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add('far', 'fa-trash-alt', 'todo__delete');

    toDoList.insertAdjacentElement('afterbegin', form);
    // toDoList.append(form);
    form.append(newCheckbox, label, deleteBtn);
}

const postNewTodo = async() => {

    formTodo.addEventListener('submit', async(event) => {
        event.preventDefault();
        const targetID = event.target.nextElementSibling.childNodes[1].id;
        console.log(event.target.nextElementSibling.childNodes[1].id);
        // console.log(targetID);

        let item = {
                description: inputTodo.value,
                done: false
            }
            // console.log(item);
        createToDo(item);

        const data = await postTodo(targetID, item);
    });
}
postNewTodo();

const updateNewLabelTodo = async(event) => {
    const newLabelText = event.target.innerText;
    if (event.target && event.target.classList.contains('todo__single')) {
        const targetID = event.target.parentNode.id;
        const data = await updateTodo(targetID, { description: newLabelText, done: false });
    }
}
toDoList.addEventListener('input', updateNewLabelTodo);

const updateCheckedTodo = async(event) => {
    const labelText = event.target.nextElementSibling.innerText;
    console.log(event.target);
    if (event.target && event.target.classList.contains('todo__checkbox')) {
        const targetID = event.target.parentNode.id;
        const data = await updateTodo(targetID, { description: labelText, done: true });
    }
}
toDoList.addEventListener('change', updateCheckedTodo);

const deleteToDoItem = async(event) => {
    const deleteBtn = event.target;
    if (event.target && event.target.classList.contains('todo__delete')) {
        console.log(event.target);

        event.target.parentNode.classList.add('delete');
        const targetID = event.target.parentNode.id;
        const data = await deleteTodo(targetID);
    }
}
toDoList.addEventListener('click', deleteToDoItem);