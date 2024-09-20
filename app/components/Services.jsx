import React, { useEffect, useRef } from 'react'
import { FaGlobeAmericas, FaHeadset, FaMoneyBillWave, FaHotel, FaPlane, FaCarSide } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const services = [
    {
      icon: <FaGlobeAmericas className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Customized Travel Plans",
      description: "Tailored itineraries to suit your preferences and budget, ensuring a unique and personalized travel experience.",
    },
    {
      icon: <FaHeadset className="h-12 w-12 text-green-500 mb-4" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs, providing peace of mind throughout your journey.",
    },
    {
      icon: <FaMoneyBillWave className="h-12 w-12 text-yellow-500 mb-4" />,
      title: "Best Price Guarantee",
      description: "We ensure you get the most competitive prices for your trip, maximizing value without compromising quality.",
    },
    {
      icon: <FaHotel className="h-12 w-12 text-purple-500 mb-4" />,
      title: "Luxury Accommodations",
      description: "Access to a curated selection of premium hotels and resorts for a comfortable and memorable stay.",
    },
    {
      icon: <FaPlane className="h-12 w-12 text-red-500 mb-4" />,
      title: "Flight Bookings",
      description: "Hassle-free flight reservations with access to the best deals and preferred airlines.",
    },
    {
      icon: <FaCarSide className="h-12 w-12 text-indigo-500 mb-4" />,
      title: "Transportation Services",
      description: "Seamless transportation arrangements, from airport transfers to guided tours in your destination.",
    },
  ]

  const servicesRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const servicesSection = servicesRef.current
    const serviceCards = cardsRef.current

    gsap.fromTo(servicesSection.querySelector('h2'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesSection,
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      }
    )

    gsap.fromTo(servicesSection.querySelector('p'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesSection,
          start: 'top 75%',
          end: 'top 45%',
          scrub: true,
        }
      }
    )

    serviceCards.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
          delay: index * 0.2
        }
      )
    })
  }, [])

  return (
    <div ref={servicesRef} className="bg-[#387D96] backdrop-filter backdrop-blur-lg bg-opacity-20 py-20 z-30 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-300 text-center mb-12">Elevate your travel experience with our premium offerings</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="bg-white/80 rounded-lg shadow-lg p-8 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
