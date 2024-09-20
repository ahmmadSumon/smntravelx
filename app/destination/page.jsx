"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  
  {
    id: 1,
    imgSrc: "/images/hero/img1.jpg",
    destinationTitle: "Machu Picchu",
    locationName: "Peru",
    location: "Andes Mountains",
    grade: "4.8",
    fees: "$4150",
    description: "Explore the ancient Inca city situated high in the Andes mountains. Machu Picchu is a UNESCO World Heritage Site and one of the most iconic archaeological sites in the world."
  },
  {
    id: 2,
    imgSrc: "/images/hero/img2.jpg",
    destinationTitle: "Santorini",
    locationName: "Greece",
    location: "Aegean Sea",
    grade: "4.9",
    fees: "$2200",
    description: "Enjoy the breathtaking views of the Aegean Sea from the charming villages of Santorini. Famous for its white-washed buildings and stunning sunsets."
  },
  {
    id: 3,
    imgSrc: "/images/hero/img3.jpg",
    destinationTitle: "Kyoto",
    locationName: "Japan",
    location: "Kyoto City",
    grade: "4.7",
    fees: "$3100",
    description: "Immerse yourself in the rich history and culture of Kyoto. Visit ancient temples, traditional tea houses, and beautiful cherry blossom gardens."
  },
  {
    id: 4,
    imgSrc: "/images/hero/img4.jpg",
    destinationTitle: "Grand Canyon",
    locationName: "USA",
    location: "Arizona",
    grade: "4.6",
    fees: "$4120",
    description: "Experience the awe-inspiring beauty of the Grand Canyon. Hike along the rim, take a helicopter tour, or raft down the Colorado River."
  },
  {
    id: 5,
    imgSrc: "/images/hero/img5.jpg",
    destinationTitle: "Venice",
    locationName: "Italy",
    location: "Venice",
    grade: "4.8",
    fees: "$3180",
    description: "Navigate the romantic canals of Venice on a gondola, explore historic architecture, and indulge in delicious Italian cuisine."
  },
  {
    id: 6,
    imgSrc: "/images/hero/img6.jpg",
    destinationTitle: "Great Barrier Reef",
    locationName: "Australia",
    location: "Queensland",
    grade: "4.9",
    fees: "$3130",
    description: "Dive into the vibrant underwater world of the Great Barrier Reef. Snorkel or scuba dive to witness colorful coral formations and diverse marine life."
  },
  {
    id: 7,
    imgSrc: "/images/hero/img7.jpg",
    destinationTitle: "Paris",
    locationName: "France",
    location: "Paris",
    grade: "4.7",
    fees: "$4250",
    description: "Experience the romance of Paris with its iconic landmarks such as the Eiffel Tower, Louvre Museum, and charming streets filled with cafes."
  },
  {
    id: 8,
    imgSrc: "/images/hero/img8.jpg",
    destinationTitle: "Banff National Park",
    locationName: "Canada",
    location: "Alberta",
    grade: "4.8",
    fees: "$3560",
    description: "Discover the stunning landscapes of Banff National Park, featuring pristine lakes, snow-capped mountains, and abundant wildlife."
  },
  {
    id: 9,
    imgSrc: "/images/hero/img9.jpg",
    destinationTitle: "Cappadocia",
    locationName: "Turkey",
    location: "Cappadocia",
    grade: "4.6",
    fees: "$2850",
    description: "Marvel at the unique fairy chimney rock formations and take a hot air balloon ride over the surreal landscapes of Cappadocia."
  },
  {
    id: 10,
    imgSrc: "/images/hero/img10.jpg",
    destinationTitle: "Rio de Janeiro",
    locationName: "Brazil",
    location: "Rio de Janeiro",
    grade: "4.9",
    fees: "$3220",
    description: "Experience the vibrant energy of Rio de Janeiro with its famous beaches, Christ the Redeemer statue, and lively Carnival celebrations."
  } 
];

const Destination = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: -100,
          rotation: -15,
        },
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          rotation: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none none",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#18181B] z-50 py-16 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 sm:text-5xl lg:text-6xl">
            Most Visited Places
          </h3>
          <p className="mt-4 text-xl text-blue-200">
            Discover the world's most popular destinations
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {data.map(({ id, imgSrc, destinationTitle, locationName, location, grade, fees, description }, index) => (
            <div
              key={id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="package-card group relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div className="relative w-full h-80 rounded-t-2xl overflow-hidden">
                <Image
                  src={imgSrc}
                  alt={destinationTitle}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-2xl font-bold text-white">{destinationTitle}</h2>
                  <div className="flex items-center mt-1">
                    <CiLocationOn className="text-blue-300 mr-1" />
                    <p className="text-sm text-blue-200">
                      {locationName}, {location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <p className="text-sm font-medium text-blue-300">{grade}</p>
                  </div>
                  <p className="text-lg font-bold text-green-400">{fees}</p>
                </div>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{description}</p>
                <Link href={`/destination/${id}`}>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center font-semibold">
                    <FaClipboardCheck className="mr-2" />
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destination;
