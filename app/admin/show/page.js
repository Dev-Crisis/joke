"use client"
import {getTasks} from "../../../utils/Utils";
import NavBar from "../../components/NavBar";
import {useEffect, useState} from "react";

const Show = async () => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTasks().then((value) => {
            setLoading(true)
            setTasks(value)
            setLoading(false)
        })
    }, []);

    return (
    <>
        <NavBar/>
        <main className="p-4">
            <h1 className="text-3xl">Show</h1>
            {loading ? <p>"SALUT"</p> : <></> &&
                tasks.map((task) => {
                    return <h3 key={task.id}> {task.content} ({task.completed ? "Fait" : "Non Fait"})</h3>
                })}
        </main>
    </>)
}

export default Show;
