import { GiExpense } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import Stats from '@/components/stats';
import BarChart from '@/components/barChart';

export default function Page() {
  return (
    <div className="w-full grid grid-cols-3 grid-rows-[auto,auto,1fr,auto] gap-6 ">
      {/* Income */}
      <div className="w-full rounded-xl flex flex-row justify-between items-center p-5 gap-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Income</h1>
          <p className="text-xl font-normal">1.3240.340</p>
        </div>
        <IoWalletSharp size={30} />
      </div>

      {/* Expenses */}
      <div className="w-full rounded-xl flex flex-row justify-between items-center p-5 gap-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Expenses</h1>
          <p className="text-xl font-normal">500.240</p>
        </div>
        <GiExpense size={30} />
      </div>

      {/* Profit */}
      <div className="w-full rounded-xl flex flex-row justify-between items-center p-5 gap-7 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Profit</h1>
          <p className="text-xl font-normal">824.100</p>
        </div>
        <FaChartLine size={30} />
      </div>

      {/* Stats */}
      <div className="w-full rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white col-span-2 row-span-3">
        <Stats />
      </div>

      {/* Bar Chart */}
      <div className="w-full rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white row-span-3">
        <BarChart />
      </div>

      {/* Extra Section */}
      <div className="w-full  rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white col-span-3 row-span-4 ">
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-5 font-semibold">Nama Barang</th>
                <th className="border border-gray-300 px-4 py-5 font-semibold">Stok</th>
                <th className="border border-gray-300 px-4 py-5 font-semibold">Harga Satuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-5 font-light">Indomie Goreng</td>
                <td className="border border-gray-300 px-4 py-5 font-light">180</td>
                <td className="border border-gray-300 px-4 py-5 font-light">4.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-5 font-light">Indomie Kuah</td>
                <td className="border border-gray-300 px-4 py-5 font-light">178</td>
                <td className="border border-gray-300 px-4 py-5 font-light">3.500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-5 font-light">Indomie Ayam Geprek</td>
                <td className="border border-gray-300 px-4 py-5 font-light">230</td>
                <td className="border border-gray-300 px-4 py-5 font-light">4.500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-5 font-light">Supermie</td>
                <td className="border border-gray-300 px-4 py-5 font-light">200</td>
                <td className="border border-gray-300 px-4 py-5 font-light">3.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-5 font-light">Mie Sedap Goreng</td>
                <td className="border border-gray-300 px-4 py-5 font-light">235</td>
                <td className="border border-gray-300 px-4 py-5 font-light">3.500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end space-x-2 mt-4 mr-9 mb-3">
          <button className="px-4 py-2 bg-transparent text-sm font-light shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray-400 rounded">Prev</button>
          <button className="px-4 py-2 bg-blue-400 text-sm font-light shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-white rounded">1</button>
          <button className="px-4 py-2 bg-transparent text-sm font-light shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray-400 rounded">2</button>
          <button className="px-4 py-2 bg-transparent text-sm font-light shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray-400 rounded">3</button>
          <button className="px-4 py-2 bg-transparent text-sm font-light shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray-400 rounded">Next</button>
        </div>
      </div>

    </div>
  );
}
