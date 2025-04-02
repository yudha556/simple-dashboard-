import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navigasi from "@/components/navigasi";

const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased h-screen flex flex-row w-full`}>
        
        {/* Sidebar */}
        <div className="w-64 h-screen flex-shrink-0 overflow-hidden shadow-xl z-10">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col w-full h-screen overflow-hidden">


          {/* Konten dengan jarak dari Navbar */}
          <div className="flex-1 overflow-auto px-9 box-border pt-36"> 
            <Navigasi />
            {children}
            <p className="mt-5 text-sm text-gray-400 font-light">@hendrian_yudha__</p>
          </div>
        </div>

      </body>
    </html>
  );
}
