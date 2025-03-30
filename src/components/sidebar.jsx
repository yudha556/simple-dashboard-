import { SiNextdotjs } from "react-icons/si";
import { FiSidebar } from "react-icons/fi";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdColorPalette } from "react-icons/io";
import { FaAccessibleIcon } from "react-icons/fa";
import { AiOutlineFontSize } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";





export default function Sidebar() {
  return (
    <div className="w-1/5 border-2 h-screen flex flex-col  items-start p-5 gap-7">
        <div className="w-full flex flex-col items-start gap-8">
            <div className="w-full flex flex-row items-center justify-between ">
                <SiNextdotjs size={30} />
                <FiSidebar size={30} />
            </div>
            <h1 className="font-bold text-2xl">Hello Yudha</h1>
        </div>

        {/* section 1 */}
        <div className="w-full flex flex-col items-start gap-4"> 
            <div className="w-full flex flex-row items-center gap-3">
                <AiFillDashboard size={25} />
                <p>Dashboard</p>
            </div>
            <div className="w-full flex flex-row items-center gap-3">
                <IoMdColorPalette size={25} />
                <p>Color</p>
            </div>
            <div className="w-full flex flex-row items-center gap-3">
                <AiOutlineFontSize size={25} />
                <p>Fonts</p>
            </div>
            <div className="w-full flex flex-row items-center gap-3">
                <FaAccessibleIcon size={25} />
                <p>Icons</p>
            </div>
        </div>

        <h1 className="text-2xl font-bold">Profile</h1>
        <div className="w-full flex flex-col items-start gap-4">
            <div className="w-full flex flex-row items-center gap-3">
                <CgProfile size={25} />
                <p>Profile</p>
            </div>
        </div>
    </div>
  )
}