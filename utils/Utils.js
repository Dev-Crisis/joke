export async function createTask(e, data) {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    if (res.ok) {

    } else {
        throw new Error("Failed to create a task")
    }
}

export async function getTasks() {
    const res = await fetch("http://localhost:3000/api/tasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Failed to get all tasks")
    }
}
