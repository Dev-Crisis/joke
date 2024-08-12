"use client"
import NavBar from "@/app/components/NavBar";
import {getTasks} from "@/utils/Utils";
import {useEffect, useState} from "react"

export default function Home() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({content: ""});

    useEffect(() => {
        getTasks().then((value) => {
            setTasks(value)
        })
    }, []);

    const randomJoke = () => {
        const rint = Math.floor(Math.random() * tasks.length)
        setTask(tasks[rint])
    }


    return (
        <>
            <NavBar/>
            <main className="p-4">
                <h1 className="text-3xl">Home</h1>
                <h2>Bienvenue clique sur le bouton ci-dessous pour obtenir une blague aléatoire</h2>
                <button
                    className="py-3 px-5 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white"
                    onClick={randomJoke}>Obtenir
                </button>
                <h3>{task.content}</h3>
            </main>
        </>
    );
}
