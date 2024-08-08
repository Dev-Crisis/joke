"use client"

import {useRouter} from "next/navigation";

export default function CreateTaskForm() {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({})
        })

        if(res.ok){
            router.push("/admin")
        }else {
            throw new Error("Failed to create a task")
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <button
                className="px-5 py-3 rounded bg-red-600 hover:bg-red-700 transition-all duration-300">Submit
        </button>
    </form>)
}