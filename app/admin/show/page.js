"use client"
import {getTasks} from "../../../utils/Utils";
import NavBar from "../../components/NavBar";
import {useEffect, useState} from "react";
import TaskCard from "../../components/TaskCard";

const Show = () => {

    const [tasks, setTasks] = useState([]);

    const loadTasks = () => {
        getTasks().then((value) => {
            return setTasks(value)
        })
    }

    useEffect(() => {
        loadTasks()
    }, []);

    return (
        <>
            <NavBar/>
            <main className="p-4">
                <div className="flex gap-5 items-center justify-start">
                    <h1 className="text-3xl">Show</h1>
                    <button onClick={loadTasks} className="py-3 px-5 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white">Refresh</button>
                </div>
                {tasks.map((task) => {
                    return <TaskCard task={task} key={task.id}/>
                })}
            </main>
        </>)
}

export default Show;
