"use client";

import { usePathname } from "next/navigation";
import { SiNextdotjs } from "react-icons/si";
import { FiSidebar } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { FaAccessibleIcon } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Sidebar() {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", icon: <AiFillDashboard size={25} />, href: "/dashboard" },
        { name: "Color", icon: <IoMdColorPalette size={25} />, href: "/color" },
        { name: "Fonts", icon: <AiOutlineFontSize size={25} />, href: "/typography" },
        { name: "Icons", icon: <FaAccessibleIcon size={25} />, href: "/icons" },
    ];

    return (
        <div className="w-full shadow-2xl h-screen flex flex-col items-start gap-7 bg-[#F8FAFC] z-10 ">
            {/* Header */}
            <div className="w-full flex flex-col items-start gap-8 p-5">
                <div className="w-full flex flex-row items-center justify-between">
                    <SiNextdotjs size={30} />
                    <FiSidebar size={30} />
                </div>
                <h1 className="font-semibold text-2xl">Hello Yudha</h1>
            </div>

            {/* Menu Section */}
            <div className="w-full flex flex-col items-start -mt-3">
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`w-full flex flex-row items-center gap-3 cursor-pointer px-5 py-2 rounded-3xl transition-all
                        ${pathname === item.href ? "bg-[#F8FAFC] shadow-md scale-105" : "hover:bg-gray-100"}`}
                    >
                        {item.icon}
                        <p className="font-normal">{item.name}</p>
                    </a>
                ))}
            </div>

            <h1 className="text-2xl font-semibold p-5 py-2">Profile</h1>
            <div className="w-full flex flex-col items-start gap-4">
                <a
                    href="/profile"
                    className={`w-full flex flex-row items-center gap-3 cursor-pointer px-5 py-2 rounded-3xl transition-all
                    ${pathname === "/profile" ? "bg-[#F8FAFC] shadow-md scale-105" : "hover:bg-gray-100"}`}
                >
                    <CgProfile size={25} />
                    <p className="font-normal">Profile</p>
                </a>
            </div>
        </div>
    );
}
