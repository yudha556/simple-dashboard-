import { IoMdSearch } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Navigasi({ isOpen }) {
    return (
        <div className={`w-full rounded-b-3xl p-5 flex items-center justify-between bg-[##F5F7F8] backdrop-blur-sm bg-opacity-30  fixed top-0 left-0 z-0   transform transition-all duration-500 ${isOpen ? "pl-35 pr-10" : "pl-30 pr-20"} `}> 
            <IoMdSearch size={25} />
            <div className="flex flex-row gap-4 items-center">
                <a href="https://github.com/yudha556/simple-dashboard-" className="flex flex-row gap-2 items-center cursor-pointer border-2 p-2 rounded-4xl ">
                    <FaGithub size={20} />
                    <p className="text-xs">Code</p>
                </a>
                <IoSunnyOutline size={25} className="text-gold"/>
                            <div className="relative group">
                                <IoIosNotifications size={25} className="cursor-pointer" />
                                <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notification 3</a>
                                    </div>
                                </div>
                            </div>                <div className="relative group">
                    <button className="flex justify-center items-center p-1 border-2 rounded-full hover:text-blue-500 cursor-pointer">
                        <img src="next.svg" alt="profile" className="w-5 h-5 rounded-full" />
                    </button>
                    <div className="absolute right-0 mt-4  w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
