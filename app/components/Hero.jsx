"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';
import Destination from '../destination/page';
import Services from './Services';
import Tours from './Tours';

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const gridItems = [
    { "--r": 1, "--c": 1 },
    { "--r": 1, "--c": 4 },
    { "--r": 1, "--c": 7 },
    { "--r": 2, "--c": 2 },
    { "--r": 2, "--c": 5 },
    { "--r": 2, "--c": 8 },
    { "--r": 3, "--c": 1 },
    { "--r": 3, "--c": 4 },
    { "--r": 3, "--c": 7 },
    { "--r": 4, "--c": 2 },
    { "--r": 4, "--c": 5 },
    { "--r": 4, "--c": 8 },
    { "--r": 5, "--c": 1 },
    { "--r": 5, "--c": 4 },
    { "--r": 5, "--c": 7 },
    { "--r": 6, "--c": 2 },
    { "--r": 6, "--c": 5 },
    { "--r": 6, "--c": 8 },
    { "--r": 7, "--c": 1 },
    { "--r": 7, "--c": 4 },
  ];

  useEffect(() => {
    if (!gsap || !ScrollTrigger) {
      console.error("GSAP or ScrollTrigger not loaded");
      return;
    }

    function initializeAnimations() {
      const elements = document.querySelectorAll(".elem");
      elements.forEach((elem) => {
        const image = elem.querySelector("img");
        const tl = gsap.timeline();
        const xTransform = gsap.utils.random(-100, 100);

        tl.set(image, {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        }, "start")
        .to(image, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger: elem,
            start: "top 15%",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeAnimations);
    } else {
      initializeAnimations();
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='w-full pt-40 relative overflow-x-hidden'>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 grid-rows-5 gap-2 sm:gap-4 w-full h-full p-4 sm:p-8 relative z-10">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-24 sm:h-32 md:h-40 elem"
            style={{
              "--r": item["--r"],
              "--c": item["--c"],
            }}
          >
            <Image
              src={`/images/hero/img${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 12.5vw"
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-20">
        <h1 className="bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 text-7xl md:text-[100px]">Explore Bangladesh</h1>
        <p className="text-lg md:text-2xl">Discover amazing destinations with TravelX</p>
      </div>
      <div className="min-h-screen z-30 p-6 rounded-lg shadow-lg mx-auto mt-8 relative flex flex-col md:flex-row items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/waves.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 mx-auto text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg flex flex-col items-center justify-center mb-8 md:mb-0 md:mr-8">
          <div className="mb-12 w-full">
            <span data-aos='fade-up' className='text-xl font-bold text-white'>Our Holiday Packages</span>
            <div className='bg-[#387D96] rounded-xl px-2'>
              <h1 data-aos='fade-up' className='text-2xl md:text-6xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mt-4 rounded-xl py-2'>Travel To Your Beloved <br /> Destination</h1>
            </div>
          </div>
          <div data-aos='fade-up' className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div>
              <label htmlFor="city" className="block mb-2 text-lg font-semibold text-white">
                Search Your Destination:
              </label>
              <div className="flex items-center bg-[#387D96] bg-opacity-20 rounded-lg overflow-hidden">
                <input type="text" placeholder='Enter place name here' className="w-full p-3 bg-transparent text-white placeholder-gray-200 focus:outline-none" />
                <button className="bg-[#387D96] text-white p-3 hover:bg-opacity-80 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="date" className="block mb-2 text-lg font-semibold text-white">
                Select Tour Date:
              </label>
              <div className="flex">
                <input type="date" className="w-full p-3 rounded-lg bg-[#387D96] bg-opacity-20 text-white focus:outline-none" />
              </div>
            </div>
            <div className="col-span-full">
              <div className="flex justify-between mb-2 text-white">
                <label htmlFor="price" className="text-lg font-semibold">
                  Select price range:
                </label>
                <h3>$5000</h3>
              </div>
              <div className="flex">
                <input type="range" max={10000} min={1000} className="w-full accent-white" />
              </div>
            </div>
            <div className="col-span-full">
              <button className="w-full bg-[#387D96] bg-opacity-20 text-white p-3 rounded-lg hover:bg-opacity-30 transition duration-300 ease-in-out">
                More Filters
              </button>
            </div>
          </div>
          <div className="mt-6 w-full">
            <input type="submit" value="Submit" className="w-full bg-[#387D96] text-white p-3 rounded-lg hover:bg-opacity-80 transition duration-300 cursor-pointer mb-4" />
            <Link href="/contact" className="block w-full bg-[#387D96] bg-opacity-20 text-white p-3 rounded-lg hover:bg-opacity-30 transition duration-300 ease-in-out text-center">
              Contact Us
            </Link>
          </div>
          <div className="mt-8 w-full">
            <h2 className="text-2xl font-bold text-white mb-4">Popular Destinations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Cox\'s Bazar', 'Sundarbans', 'Sajek Valley', 'Saint Martin'].map((place, index) => (
                <div key={index} className="relative w-full h-24 md:h-32 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/destinations/${place.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={place}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center">
                    {place}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='z-50 flex items-center justify-center mt-10'>
        <Destination />
      </div>
      <div className='z-50 flex items-center justify-center'>
        <Services />
      </div>
      <div className='z-50 flex items-center justify-center'>
        <Tours />
      </div>
    </div>
  );
};

export default Hero;
