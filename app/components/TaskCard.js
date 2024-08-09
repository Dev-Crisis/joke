import {deleteTask} from "../../utils/Utils";

function TaskCard({task}) {
    return (
        <div className="flex justify-center items-center gap-3">
            <h3 className="text-xl"> {task.content} ({task.completed ? "Fait" : "Non Fait"})</h3>
            <button className="bg-red-600 py-3 px-5 rounded text-white hover:bg-red-700 transition-all duration-300" onClick={() => deleteTask(task.id)}>DELETE</button>
        </div>
    )
}

export default TaskCard