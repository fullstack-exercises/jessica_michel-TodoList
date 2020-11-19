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

// POST
export const postTodo = async(data) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

// DELETE
export const deleteTodo = async(data) => {
    try {
        const response = await fetch(API_URL, {
            method: "DELETE",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}