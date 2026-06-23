import { useEffect , useState } from "react";
import axiosInstance from "./axiosInstance";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StatsCard from "./StatsCard";
import TaskList from "./TaskList";
import Timer from "./Timer";

function Dashboard() {

    const [tasks, setTasks] = useState([])
    const [userData, setUserData] = useState({});

    useEffect(() => {

        async function fetchData() {

            try {

                const response =
                    await axiosInstance.get(
                        "auth/protected-view/"
                    );

                setUserData(response.data);

            }

            catch (error) {

                console.log(error);

            }

        }
        fetchData();
    }, [])

    useEffect(() => {

        async function fetchTasks() {

            try {

                const response =
                    await axiosInstance.get(

                        "tasks/"

                    );

                setTasks(

                    response.data

                );

            }

            catch(error) {

                console.log(error);

            }

        }

        fetchTasks();

    }, [])

        const totalTasks = tasks.length;

        const completedTasks =tasks.filter(task =>task.status === "completed").length;

        const totalSeconds =

        tasks

        .filter(

            task => task.status === "completed"

        )

        .reduce(

            (sum, task) =>

                sum + task.duration,

            0

        );


        const hours =

        Math.floor(

            totalSeconds / 3600

        );


        const minutes =

        Math.floor(

            (totalSeconds % 3600) / 60

        );

        const pomodoros = completedTasks;

    return (
            <>
        <div className="min-h-screen bg-[#050816] flex">

            {/* Sidebar */}

            <Sidebar />

            {/* Main Content */}

            <div className="flex-1 px-10 py-8 overflow-y-auto">

                {/* Header */}

                <Header  userData={userData} />

                {/* Stats Cards */}

            <StatsCard

                totalTasks={totalTasks}

                completedTasks={completedTasks}

                hours={hours}

                minutes={minutes}

                pomodoros={pomodoros}

            />

                {/* Bottom Section */}

                <div className="grid grid-cols-2 gap-8 mt-8">

                    {/* Task List */}

                    <TaskList  tasks={tasks}  setTasks={setTasks} />

                    {/* Timer */}

                    <Timer     tasks={tasks}  setTasks={setTasks}/>

                </div>

            </div>

        </div>
            </>
    )

}

export default Dashboard;