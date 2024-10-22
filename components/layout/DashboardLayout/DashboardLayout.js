import Link from 'next/link'
import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'
import { BiIdCard } from 'react-icons/bi'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { FcIdea } from 'react-icons/fc'
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { RiNotification3Fill } from 'react-icons/ri'

import avater from '../../assets/images/ms1.png'
import Image from 'next/image'

const DashboardLayout = ({ children }) => {
  return (
    <div className=" flex justify-between   flex-col  ">
      <div className="drawer lg:drawer-open">
        <div className="     bg-cyan-50">
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button lg:hidden   ms-4 mt-4"
          >
            <FiMenu size={40} />
          </label>
        </div>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  bg-cyan-50 py-8 px-4  ">
          <div className=" py-4 space-x-3 flex items-center  justify-between lg:px-8 px-2">
            <h2 className="  lg:text-3xl font-bold">Dashboard/overviwe</h2>

            {/* <div className="flex items-center">
              
              <div className=" divider-end divider "></div>
              <div className="  flex items-center space-x-2">
                <h2>Jones Ferdinad</h2>
                <Image
                  src={avater}
                  alt="avater"
                  width={50}
                  height={50}
                  className=" rounded-full border-2 border-red-500  cursor-pointer"
                />
              </div>
            </div> */}
            <div className="flex       ">
              <div className="   flex space-x-4 items-center">
                <FaSearch className=" w-4" />

                <RiNotification3Fill className=" w-4" />
              </div>
              <div className="divider     divider-horizontal  "></div>
              <div className="flex space-x-4 items-center">
                <h2 className=" text-sm">Jones Ferdinad</h2>
                <Image
                  src={avater}
                  alt="avater"
                  className=" h-10 w-10 rounded-full border-2 border-red-500  cursor-pointer"
                />
              </div>
            </div>
          </div>

          <main className=" mx-4 px-4   py-4 rounded-md w-3/2    bg-[#FAFAFA] shadow-md  ">
            {children}
          </main>
        </div>
        <div className=" drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#463047] text-base-content min-h-full w-80 p-4">
            <li>
              <Link href={'/dashboard'}>
                <MdDashboard /> Dcoctor Dashboard
              </Link>
            </li>
            <li>
              <Link href={'/dashboard/logged'}>
                <BiIdCard /> Logged as Nur
              </Link>
            </li>
            <li>
              <a>
                <FcIdea /> Drug Recommendation
              </a>
            </li>
            <li>
              <a>
                <HiOutlineUserGroup />
                Appoinments
              </a>
            </li>
            <li>
              <Link href={'/'}>
                <FaHome />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
