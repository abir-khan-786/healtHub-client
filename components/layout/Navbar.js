import Link from 'next/link'
import React from 'react'
import { BiHealth } from 'react-icons/bi'
import icon from '../assets/images/Icon.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="navbar  px-2 container mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <a>Doctor</a>
            </li>
          </ul>
        </div>
        <Link href={'/'} className="  text-xl hidden lg:flex items-center s">
          <Image src={icon} alt="icon" width={40} height={40} />
          HealthHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <a>Doctor</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end  ">
        <a className="btn btn-xs mr-8 md:w-48 hover:bg-[#72ABFF] md:btn-sm  hover:text-white text-black   bg-none bg-[#ffffff] border-none">
          Login
        </a>
        <a className="btn btn-xs bg-[#72ABFF] text-white md:btn-sm  md:w-48 hover:bg-[#72ABFF] border-none">
          Register
        </a>
      </div>
    </div>
  )
}

export default Navbar
