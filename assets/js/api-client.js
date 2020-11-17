const API_URL = 'https://jsonbox.io/box_d788a9bf191742ebe74f';

// GET
export const getData = async(endpoint) => {
    try {
        const fetchData = await fetch(API_URL, { method: "GET" });
        const response = await fetchData.json();

        let todos = Object.keys(response).map((key) => ({
            id: key,
            description: response[key].description,
            done: response[key].done
        }));
        return todos;

    } catch (error) {
        console.log(error);
    }
}

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