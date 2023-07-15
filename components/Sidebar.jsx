import React from "react";
import Link from "next/link";
import { RxDashboard, RxPerson, RxSketchLogo } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed lg:w-20 md:w-20 w-16 h-screen lg:p-4 p-2 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="inline-block lg:mb-2 mb-2 lg:p-4 p-2 rounded-lg bg-purple-800 text-white">
              <RxSketchLogo size={18} />
            </div>
          </Link>
          <span className="lg:d-block hidden border-b-[1px] border-gray-200 w-full lg:p-4"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer lg:my-4 my-2 lg:p-4 p-2 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer lg:my-4 my-2 lg:p-4 p-2 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer lg:my-4 my-2 lg:p-4 p-2 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer lg:my-4 my-2 lg:p-4 p-2 rounded-lg inline-block">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="lg:ml-20 ml-14 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
