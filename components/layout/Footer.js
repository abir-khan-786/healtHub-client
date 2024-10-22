import Image from 'next/image'
import React from 'react'
import icon from '../assets/images/Icon.png'
import { FaFacebook, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <footer className=" mb-4  px-8 ">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-4">
        <div className=" flex items-center  ">
          <Image src={icon} className="w-8" alt="icon" />
          <h2 className=" font-bold text-xl"> HealthHub</h2>
        </div>
        <div>
          <span className="  flex">
            <FaPhoneAlt
              size={30}
              className="  mr-2  bg-[#3DB8ED] p-1 text-white w-8 h-8 rounded-full "
            />
            (+22)12345679000
          </span>
        </div>
        <div>
          <div className="  flex">
            <MdEmail className=" mr-2  bg-[#3DB8ED] p-1 text-white w-8 h-8 rounded-full" />

            <span className=" text-black">support@doctorate.com</span>
          </div>
        </div>
        <div className=" text-[#3DB8ED] flex  justify-evenly">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaLinkedinIn size={30} />
        </div>
      </div>
      <div className="  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-1 mt-8 mb-4">
        <div className=" flex items-center space-x-1 col-span-2">
          <h2 className=" font-bold text-2xl">
            {' '}
            “A Simple Story About The Doctorate Medical Center & Health Care
            Foundation”
          </h2>
        </div>
        <div>
          <div className=" ">
            <h2 className="  font-bold mb-2">Explore </h2>

            <ul className=" underline cursor-pointer list-item text-gray-500">
              <li className="list-item">Home</li>
              <li>Services</li>
              <li>About us</li>
              <li>Testimonials</li>
              <li>News</li>
            </ul>
          </div>
        </div>
        <div>
          <div className=" ">
            <h2 className=" font-bold  mb-2">Uitility</h2>

            <ul className=" underline  cursor-pointer list-item text-gray-500  ">
              <li>Pages</li>
              <li>Style</li>
              <li>Guide</li>
              <li>Changelog</li>
              <li>Licenses</li>
              <li>Protected Page</li>
              <li>404 Page</li>
            </ul>
          </div>
        </div>
        <div className=" ">
          <h2 className=" text-xl">Book an appointment</h2>
          <p className=" text-sm text-gray-600  my-2">
            It is a long established fact that a reader will be distracted
          </p>

          <input
            className="   bg-white text-gray-400   my-4  h-20 w-full textarea textarea-bordered "
            placeholder="sent your messge"
          />

          <button className="btn bg-[#3DB8ED] text-white border-none rounded-none">
            Submit
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
