const API_URL = 'https://jsonbox.io/box_d788a9bf191742ebe74f';

// GET
export const getData = async() => {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            return await response.json();
        }
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
    // addTodo();