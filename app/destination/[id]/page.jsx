"use client"
import React from 'react'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaCalendarAlt, FaClock, FaMountain, FaRoute, FaCamera } from "react-icons/fa";
import { useParams } from 'next/navigation'
import Link from 'next/link';

const data = [
  // Your destination data remains unchanged
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
  // ... (other destination data)
];

const DestinationPage = () => {
  const { id } = useParams();
  const destination = data.find((item) => item.id === parseInt(id));

  if (!destination) {
    return <div className="text-white text-center py-20">Destination not found</div>;
  }

  return (
    <div className="bg-black min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-[60vh] md:h-auto">
              <Image
                src={destination.imgSrc}
                alt={destination.destinationTitle}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-text">{destination.destinationTitle}</h1>
              <div className="flex items-center mb-4">
                <CiLocationOn className="text-yellow-400 text-2xl mr-2" />
                <p className="text-xl text-white shadow-text">
                  {destination.locationName}, {destination.location}
                </p>
              </div>
              <div className="flex items-center justify-between mb-8 bg-white/20 p-4 rounded-xl">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 text-2xl mr-2" />
                  <p className="text-xl font-medium text-white">{destination.grade} Rating</p>
                </div>
                <p className="text-3xl font-bold text-green-400">{destination.fees}</p>
              </div>
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">{destination.description}</p>
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-white pb-2">Detailed Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200 mb-8">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-yellow-400 text-xl mr-3" />
                  <p>Best time to visit: March to October</p>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-yellow-400 text-xl mr-3" />
                  <p>Duration: 4-5 days recommended</p>
                </div>
                <div className="flex items-center">
                  <FaMountain className="text-yellow-400 text-xl mr-3" />
                  <p>Altitude: 2,430 meters (7,970 ft) above sea level</p>
                </div>
                <div className="flex items-center">
                  <FaRoute className="text-yellow-400 text-xl mr-3" />
                  <p>Guided tours available</p>
                </div>
                <div className="flex items-center">
                  <FaCamera className="text-yellow-400 text-xl mr-3" />
                  <p>Hiking and photography opportunities</p>
                </div>
              </div>
              <Link href="/contact">
             
              <button className="w-full bg-[#387D96] text-white py-3 px-6 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg font-semibold">
                Book This Destination
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
