"use client"
import {createTask} from "../../../utils/Utils";
import NavBar from "../../components/NavBar";
import {useState} from "react";

const Create = () => {

    const [content, setContent] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const changeContent = (e) => {
      setContent(e.target.value)
    }

    const changeIsCompleted = (e) => {
        setIsCompleted(e.target.value === "on")
    }

    return (
    <>
        <NavBar/>
        <main className="p-4">
            <h1 className="text-3xl">Create</h1>
            <form onSubmit={(e) => createTask(e, {content, isCompleted})} className="flex flex-col items-center justify-center gap-4">
                <input onInput={changeContent} name="content" type="text" className="border-2 border-black rounded"/>
                <input onChange={changeIsCompleted} name="completed" type="checkbox" width="50px"/>
                <button className="px-5 py-3 rounded bg-green-600 hover:bg-green-700 transition-all duration-300 text-white">Create</button>
            </form>
        </main>
    </>)
}

export default Create;
