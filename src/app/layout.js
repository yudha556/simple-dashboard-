"use client";

import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased h-screen flex flex-row w-full`}>
        
        {/* Sidebar */}
        <div className={`h-screen flex-shrink-0 overflow-hidden shadow-xl z-10 transition-all duration-500 ${isOpen ? "w-64" : "w-16"}`}>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content Area */}
        <div className={`flex flex-col h-screen overflow-hidden transition-all duration-500 w-full ${isOpen ? "translate-x-0" : "-translate-x-0"}`}>
          {/* Konten dengan jarak dari Navbar */}
          <div className="flex-1 overflow-auto px-9 box-border pt-36 bg-grey"> 
            <Navigasi isOpen={isOpen} toggleSidebar={toggleSidebar} />
            {children}
            <p className="mt-5 text-sm text-gray-400 font-light">@hendrian_yudha__</p>
          </div>
        </div>

      </body>
    </html>
  );
}
