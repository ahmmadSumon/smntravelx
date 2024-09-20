import React from 'react'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter, FaYoutube, FaInstagramSquare, FaTripadvisor } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-gray-900 z-50 absolute w-full text-white">
      <section className="footer relative overflow-hidden">
        <div className="videoDiv absolute inset-0">
          <video src="/images/ship.mp4" autoPlay muted loop className="w-full h-full object-cover"></video>
        </div>
        <div className="footerContent container mx-auto relative z-10 px-4 py-16">
          <div className="contactDiv mb-12">
            <div className="text mb-6">
              <small className="text-sm opacity-70">Keep in touch</small>
              <h2 className="text-3xl font-bold mt-2">Travel with us</h2>
            </div>
            <div className="inputDiv flex max-w-xl">
              <input type="text" placeholder='Enter your Email here' className="flex-grow bg-white bg-opacity-20 p-3 rounded-l-md focus:outline-none text-white" />
              <button className='btn flex items-center bg-blue-500 text-white px-4 py-3 rounded-r-md hover:bg-blue-600 transition duration-300'>
                SEND <FiSend className='ml-2' />
              </button>
            </div>
          </div>
          <div className="footerCard grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="footerIntro">
              <div className="logoDiv flex items-center mb-4">
                <a href="#" className='logo flex items-center text-2xl font-bold'>
                  <MdOutlineTravelExplore className='text-3xl mr-2' />smnTravelX
                </a>
              </div>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident ducimus fuga voluptatem dignissimos consequatur sint aliquid!</p>
              <div className="footerSocial flex space-x-4">
                <FaTwitter className='text-2xl hover:text-blue-400 cursor-pointer'/>
                <FaYoutube className='text-2xl hover:text-red-500 cursor-pointer'/>
                <FaInstagramSquare className='text-2xl hover:text-pink-500 cursor-pointer'/>
                <FaTripadvisor className='text-2xl hover:text-green-500 cursor-pointer'/>
              </div>
            </div>
            <div className="footerLinks">
              <h3 className="text-xl font-semibold mb-4">Our Agency</h3>
              <ul>
                {['Services', 'Insurance', 'Agency', 'Tourism', 'Payment'].map((item, index) => (
                  <li key={index} className="mb-2 flex items-center hover:text-blue-300 cursor-pointer">
                    <IoIosArrowForward className='mr-2'/>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footerLinks">
              <h3 className="text-xl font-semibold mb-4">Partners</h3>
              <ul>
                {['Booking', 'Rentcars', 'HostelWorld', 'Trivago', 'TripAdvisor'].map((item, index) => (
                  <li key={index} className="mb-2 flex items-center hover:text-blue-300 cursor-pointer">
                    <IoIosArrowForward className='mr-2'/>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="footerLinks">
              <h3 className="text-xl font-semibold mb-4">Last Minute</h3>
              <ul>
                {['London', 'California', 'Indonesia', 'Europe', 'Oceania'].map((item, index) => (
                  <li key={index} className="mb-2 flex items-center hover:text-blue-300 cursor-pointer">
                    <IoIosArrowForward className='mr-2'/>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyWright text-center py-4 border-t border-gray-700">
          <p>COPYRIGHTS RESERVED <span className="font-semibold">&copy; SMN 2024</span></p>
        </div>
      </section>
    </div>
  )
}

export default Footer
