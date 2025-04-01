import { GiExpense } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import Stats from '@/components/stats'

export default function Page() {
  return (

    <div className="w-full grid grid-cols-3 grid-rows-10 gap-6">
      <div className="w-full rounded-xl flex flex-row justify-between p-5  gap-7 border-2 row-span-2 row-start-2">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-4xl font-semibold">Income</h1>
          <p className="text-xl">1.3240.340</p>
        </div>
        <IoWalletSharp size={20} />
      </div>
      <div className="w-full rounded-xl flex flex-row justify-between p-5 gap-7 border-2 row-span-2 row-start-2 ">
      <div className="flex flex-col gap-1 ">
          <h1 className="text-4xl font-semibold">Income</h1>
          <p className="text-xl">1.3240.340</p>
        </div>
        <GiExpense size={20} />
      </div>
      <div className="w-full rounded-xl flex flex-row justify-between p-5 gap-7 border-2 row-span-2 row-start-2 ">
      <div className="flex flex-col gap-1 ">
          <h1 className="text-4xl font-semibold">Income</h1>
          <p className="text-xl">1.3240.340</p>
        </div>
        <FaChartLine size={20} />
      </div>


      <div className="w-full rounded-xl border-2 col-span-2 row-span-3 row-start-4"><Stats /></div>
      <div className="w-full rounded-xl border-2 row-span-3 col-start-3 row-start-4">16</div>
      <div className="w-full rounded-xl border-2 col-span-3 row-span-4 row-start-7">17</div>
    </div>

  )
}