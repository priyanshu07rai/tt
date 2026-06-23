import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";


function Header({ userData }) {

    const navigate = useNavigate();

    const { setIsLoggedIn } =
        useContext(AuthContext);

    function handleLogout() {

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        setIsLoggedIn(false);

        navigate("/");

    }

        const today = new Date();

        const currentDate =
            today.toLocaleDateString(

                "en-US",

                {

                    month: "long",

                    day: "numeric",

                    year: "numeric"

                }

            );

    return (
    <div className="flex justify-between items-center">

        {/* Left Side */}

        <div>

            <h1 className="text-5xl font-bold text-white">

                hello,

                <span className="text-purple-500">

                    {" "}{userData.username}!

                </span>

                👋

            </h1>

            <p className="text-gray-400 mt-3 text-xl">

                Let's make today productive.

            </p>

        </div>


        {/* Right Side */}

        <div className="flex items-center gap-6">

            {/* Date Card */}

            <div
                className="
                bg-[#0d1328]
                border border-gray-800
                rounded-3xl
                px-8
                py-5
                "
            >

                <h3 className="text-white text-xl">

                    {currentDate}

                </h3>

            </div>


            {/* Logout Button */}

            <button

                onClick={handleLogout}

                className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-7
                py-4
                rounded-2xl
                font-semibold
                "

            >

                Logout

            </button>

        </div>

    </div>
        )
}

export default Header;