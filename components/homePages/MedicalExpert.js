import React from 'react'
import dr1 from '../assets/images/ms1.png'
import dr2 from '../assets/images/ms2.png'
import dr3 from '../assets/images/ms3.png'
import Image from 'next/image'
import {
  FaBeer,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const MedicalExpert = () => {
  const data = {
    expatice: [
      {
        name: 'Vanseena Adams',
        title: 'Dental Patient',
        image: dr1,
        link: [
          {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/',
            instagram: 'https://www.instagram.com/',
          },
        ],
      },
      {
        name: 'Dr. Helen Wilmore',
        title: 'Dental Patient',
        image: dr2,
        link: [
          {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/',
          },
        ],
      },
      {
        name: 'Dr. Kate Winslot ',
        title: 'Dental Patient',
        image: dr3,
        link: [
          {
            facebook: 'https://www.facebook.com/',
            twitter: 'https://twitter.com/',
            linkedin: 'https://www.linkedin.com/',
          },
        ],
      },
    ],
  }

  return (
    <div className=" mt-5 mb-4 ">
      <div className=" px-4  flex justify-between   ">
        <div>
          <h1 className="    uppercase  brand_text    text-xs  border border-cyan-400 p-2">
            Medical Experts
          </h1>
          <h2 className=" text-xl mt-4  font-bold  my-4">
            The Professional Doctors
          </h2>
        </div>
        <button className="btn btn-sm w-32 text-xs bg-[#72ABFF] text-white border-none">
          View All Doctors
        </button>
      </div>

      <div className="   grid grid-cols-1 md:grid-cols-2 gap-4 px-4  lg:grid-cols-3  my-4 py-4 mb-20 mt-4   ">
        {data.expatice.map((item, index) => (
          <div className="card bg-[#3DB8ED]  shadow-xl" key={index}>
            <figure className="px-10 pt-10">
              <Image src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-white">{item.name}</h2>
              <p className=" text-white">{item.title}</p>
              <div className="card-actions ">
                {item.link.map((item, index) => (
                  <div className="flex justify-around" key={index}>
                    <a
                      href={item?.facebook}
                      className="btn btn-ghost text-white"
                    >
                      <FaFacebook />
                    </a>
                    <a href={item.twitter} className="btn btn-ghost text-white">
                      <FaTwitter />
                    </a>
                    <a
                      href={item.linkedin}
                      className="btn btn-ghost text-white"
                    >
                      <FaLinkedinIn />
                    </a>
                    {item.instagram && (
                      <a
                        href={item.instagram}
                        className="btn btn-ghost text-white"
                      >
                        <FaInstagram />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MedicalExpert
