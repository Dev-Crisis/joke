const baseUrl = "https://master--rand-joke.netlify.app";
export async function createTask(e, data, router) {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

    if (res.ok) {
        router.push("/admin/show")
    } else {
        throw new Error("Failed to create a task")
    }
}

export async function getTasks() {
    const res = await fetch(`${baseUrl}/api/tasks`, {
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

export async function deleteTask(id) {
    const res = await fetch(`${baseUrl}/api/tasks/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id: id})
    })
    if (res.ok) {

    } else {
        throw new Error(`Failed to delete task with id : ${id}`)
    }
}
