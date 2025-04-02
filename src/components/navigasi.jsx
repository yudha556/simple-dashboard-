import { IoMdSearch } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Navigasi() {
    return (
        <div className="w-full rounded-b-3xl p-5 flex items-center justify-between bg-[##F5F7F8] backdrop-blur-sm bg-opacity-30  fixed top-0 left-0 z-0 pl-75 pr-10 "> 
            <IoMdSearch size={25} />
            <div className="flex flex-row gap-4 items-center">
                <a href="https://github.com/yudha556/simple-dashboard-" className="flex flex-row gap-2 items-center cursor-pointer border-2 p-2 rounded-4xl ">
                    <FaGithub size={20} />
                    <p className="text-xs">Code</p>
                </a>
                <IoSunnyOutline size={25} />
                <IoIosNotifications size={25} />
                <button className="flex justify-center items-center p-1 border-2 rounded-full hover:text-blue-500 cursor-pointer">
                    <img src="next.svg" alt="profile" className="w-5 h-5 rounded-full" />
                </button>
            </div>
        </div>
    )
}
