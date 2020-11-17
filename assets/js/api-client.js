const API_URL = 'https://jsonbox.io/box_d788a9bf191742ebe74f';

// GET
const getData = (endpoint) => {
    try {
        fetch(API_URL, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    } catch (error) {
        console.log(error);
    }
}
getData();

// POST
const data = { description: "water plants", done: false };
const addTodo = () => {
    try {
        fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
    } catch (error) {
        console.log(error);
    }
}
addTodo();