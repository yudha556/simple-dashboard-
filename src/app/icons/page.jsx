import { SiNextdotjs } from "react-icons/si";
import { FiSidebar } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { FaAccessibleIcon } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiExpense } from "react-icons/gi";
import { IoWalletOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function icons() {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><SiNextdotjs size={50} />SiNextdotjs</div>
            <div className="bg-grey text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><FiSidebar size={50} />FiSidebar</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><AiFillDashboard size={50} />AiFillDashboard</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><IoIosNotifications size={50} />IoIosNotifications</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><IoMdColorPalette size={50} />IoMdColorPalette</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><FaAccessibleIcon size={50} />FaAccessibleIcon</div>
            <div className="bg-grey text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><AiOutlineFontSize size={50} />AiOutlineFontSize</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><CgProfile size={50} />CgProfile</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><GiExpense size={50} />GiExpense</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><IoWalletOutline size={50} />IoWalletSharp</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><FaChartLine size={50} />FaChartLine</div>
            <div className="bg-grey text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><IoMdSearch size={50} />IoMdSearch</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><IoSunnyOutline size={50} />IoSunnyOutline</div>
            <div className="bg-grey  text-black p-5 flex flex-col gap-2 items-center justify-center shadow-2xl"><FaGithub size={50} />FaGithub</div>
        </div>
    )
}