import TaskItem from "./TaskItem";
import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

function TaskList({ tasks, setTasks }) {

        const [showModal, setShowModal] = useState(false);




    return (

        <div className="bg-[#0d1328] border border-gray-800 rounded-3xl p-8">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold text-white">

                        Today's Tasks

                    </h1>

                    <p className="text-gray-400 mt-2">

                        Stay productive and focused

                    </p>

                </div>


                <button
                    className="
                    bg-purple-600
                    hover:bg-purple-700
                    text-white
                    px-6
                    py-3
                    rounded-2xl
                    font-semibold
                    "
                    onClick={() => setShowModal(true)}
                >

                    + Add Task

                </button>

            </div>


            {/* Tasks */}

            <div className="flex flex-col gap-5">

                {

                    tasks.map((task) => (

                        <TaskItem

                            key={task.id}

                            task={task}

                            setTasks={setTasks}

                            tasks={tasks}


                        />

                    ))

                }

            </div>
            {

            showModal &&

            <AddTaskModal

            setShowModal={setShowModal}

            tasks={tasks}

            setTasks={setTasks} />}

            

        </div>

    )

}

export default TaskList;