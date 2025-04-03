"use client";

import { usePathname } from "next/navigation";
import { SiNextdotjs } from "react-icons/si";
import { FiSidebar } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { FaAccessibleIcon } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Sidebar({ isOpen, toggleSidebar }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: <AiFillDashboard size={25} />, href: "/dashboard" },
        { name: "Color", icon: <IoMdColorPalette size={25} />, href: "/color" },
        { name: "Fonts", icon: <AiOutlineFontSize size={25} />, href: "/typography" },
        { name: "Icons", icon: <FaAccessibleIcon size={25} />, href: "/icons" },
    ];

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`h-screen bg-grey shadow-2xl transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-16"}`}
            >
                {/* Header */}
                <div className="p-5 flex items-center justify-between">
                    <div className={`transition-all duration-500 ${isOpen ? "scale-100" : "hidden"}`}>
                        <SiNextdotjs size={30} />
                    </div>
                    <button onClick={toggleSidebar} className="p-2 transition-transform duration-500">
                        <FiSidebar size={30} className={`transform transition-all duration-500 ${isOpen ? "rotate-0" : "rotate-180 -translate-x-2"}`}/>
                    </button>
                    
                </div>
                <h3 className={`text-xl font-semibold transition-all duration-500 ${isOpen ? "px-5" : "hidden"}`}>Halo Yudha</h3>

                {/* Menu */}
                <div className={`w-full mt-10 flex flex-col items-start justify-center gap-4 transition-all duration-500 ${isOpen ? "px-3" : "px-0 translate-x-2 scale-95"}`}>
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`w-full flex items-center gap-3 cursor-pointer py-2 px-3 rounded-3xl transition-all duration-300 ${isOpen ? "translate-x-0" : ""} ${
                                pathname === item.href ? "bg-grey shadow-md " : "hover:bg-gray-100 "
                            }`}
                        >
                            {item.icon}
                            <p className={`font-normal transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
                                {item.name}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Profile */}
                <div className="w-full mt-5 px-5 flex flex-col gap-5">
                    <h1 className={`w-full text-2xl font-semibold transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 h-0"}`}>
                        Profile
                    </h1>
                    <a
                        href="https://my-porto-rho-ten.vercel.app/"
                        className={`w-full flex items-center gap-3 cursor-pointer py-2 px-0 rounded-3xl transition-all duration-300 ${isOpen ? "" : "hidden"} ${
                            pathname === "/profile" ? "bg-gray-200 shadow-md scale-105" : "hover:bg-gray-100"
                        }`}
                    >
                        <CgProfile size={25} />
                        <p className={`font-normal transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 w-0"}`}>
                            Profile
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
