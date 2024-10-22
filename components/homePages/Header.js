import Image from 'next/image'
import React from 'react'
import headerImage from '../assets/images/Image.png'
const Header = () => {
  return (
    <div className="   mb-4">
      <div className="  hero ">
        <div className="hero-content  grid grid-cols-1  md:grid-cols-2      ">
          <div className=" flex justify-center">
            <Image
              src={headerImage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className=" mr-5">
            <h1 className="text-3xl  capitalize font-bold md:text-5xl">
              Makes Your Health Better Will Makes Us Better
            </h1>
            <p className="py-4 text-sm md:text-xl text-gray-600">
              Harnessing the power of teamwork, this approach focuses on
              integrating diverse expertise to enhance patient care and
              outcomes..Harnessing the power of teamwork, this approach focuses
              on integrating diverse expertise to enhance patient care and
              outcomes.
            </p>
            <div className=" flex py-4">
              <button className="btn md:text-xl md:btn-md font-mono text-xs btn-sm  bg-[#72ABFF] text-white mr-5 border-none">
                Make An Appoinment
              </button>
              <button className="btn  font-mono md:text-xl md:btn-md text-xs btn-sm bg-[#72ABFF]  text-white border-none">
                View Department
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  hero ">
        <div className="hero-content  grid grid-cols-1  md:grid-cols-2      ">
          <div className=" mr-5">
            <h1 className="text-3xl  capitalize font-bold md:text-5xl">
              Makes Your Health Better Will Makes Us Better
            </h1>
            <p className="py-4 text-sm md:text-xl text-gray-600">
              Harnessing the power of teamwork, this approach focuses on
              integrating diverse expertise to enhance patient care and
              outcomes..Harnessing the power of teamwork, this approach focuses
              on integrating diverse expertise to enhance patient care and
              outcomes.
            </p>
            <div className=" flex py-4">
              <h2 className=" font-bold underline">Learn More.....</h2>
            </div>
          </div>
          <div className=" flex justify-center">
            <Image
              src={headerImage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      {/* <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={headerImage}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className=" ml-8">
            <h1 className="text-5xl font-bold">
              Makes Your Health Better Will Makes Us Better
            </h1>
            <p className="py-6">
              Harnessing the power of teamwork, this approach focuses on
              integrating diverse expertise to enhance patient care and
              outcomes..Harnessing the power of teamwork, this approach focuses
              on integrating diverse expertise to enhance patient care and
              outcomes..Harnessing the power of teamwork, this approach focuses
              on integrating diverse expertise to enhance patient care and
              outcomes..Harnessing the power of teamwork, this approach focuses
              on integrating diverse expertise to enhance patient care and
              outcomes..
            </p>

            <h2 className=" font-bold">Learn More</h2>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Header
