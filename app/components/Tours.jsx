import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tourData = [
  {
    id: 1,
    image: '/images/tour1.jpg',
    title: 'Tropical Paradise Adventure',
    location: 'Bali, Indonesia',
    rating: 4.8,
    review: "An unforgettable experience! The beaches were pristine and the local culture was fascinating.",
    reviewer: 'Sarah M.'
  },
  {
    id: 2,
    image: '/images/tour2.jpg',
    title: 'European Capitals Explorer',
    location: 'Multiple Cities, Europe',
    rating: 4.9,
    review: "We saw so much in just two weeks! Every city had its own unique charm.",
    reviewer: 'John D.'
  },
  {
    id: 3,
    image: '/images/tour3.jpg',
    title: 'African Safari Experience',
    location: 'Kenya & Tanzania',
    rating: 5.0,
    review: "Seeing the wildlife up close was breathtaking. Our guide was incredibly knowledgeable.",
    reviewer: 'Emma L.'
  }
]

const unforgettableMoments = [
  {
    id: 1,
    image: '/images/beach-football.jpg',
    title: 'Beach Football',
    description: 'Enjoy a thrilling game of football on pristine sandy beaches.'
  },
  {
    id: 2,
    image: '/images/volleyball.jpg',
    title: 'Beach Volleyball',
    description: 'Challenge your friends to an exciting volleyball match by the ocean.'
  },
  {
    id: 3,
    image: '/images/river-surfing.jpg',
    title: 'River Surfing',
    description: 'Experience the rush of surfing on rapid river waves.'
  },
  {
    id: 4,
    image: '/images/skiing.jpg',
    title: 'Skiing Adventure',
    description: 'Glide down snowy slopes in world-class ski resorts.'
  }
]

const Tours = () => {
  const scrollRef = useRef(null)
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % unforgettableMoments.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + unforgettableMoments.length) % unforgettableMoments.length)
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const carouselContainer = carouselRef.current

    if (scrollContainer && carouselContainer) {
      gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - scrollContainer.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: scrollContainer,
          start: "top top",
          end: () => `+=${scrollContainer.scrollWidth - scrollContainer.offsetWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      })

      const horizontalScroll = gsap.to(carouselContainer, {
        x: () => -(carouselContainer.scrollWidth - carouselContainer.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: carouselContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          horizontal: true
        }
      })

      return () => {
        horizontalScroll.kill()
      }
    }
  }, [])

  useEffect(() => {
    let interval
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide()
      }, 2500)
    }
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div className="bg-[#303032] backdrop-filter backdrop-blur-lg bg-opacity-20 py-20 z-30 w-full px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <h2 className="text-4xl font-extrabold text-white text-center mt-24 mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Unforgettable Moments
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </h2>
        <div 
          ref={carouselRef} 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {unforgettableMoments.map((moment, index) => (
            <div key={moment.id} className={`w-full bg-[#303032] rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 ${index === currentSlide ? 'block' : 'hidden'}`}>
              <div className="relative h-96">
                <Image 
                  src={moment.image} 
                  alt={moment.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                  priority={index === currentSlide}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-3xl font-bold text-white text-center">{moment.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-4">{moment.title}</h3>
                <p className="text-gray-300 text-lg">{moment.description}</p>
              </div>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2">
            <FaChevronRight className="text-gray-800" />
          </button>
        </div>
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            Happy Travelers, Unforgettable Experiences
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourData.map((tour) => (
            <div key={tour.id} className="bg-[#303032] rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative h-56">
                <Image 
                  src={tour.image} 
                  alt={tour.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                  loading="eager"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{tour.title}</h3>
                <p className="text-indigo-300 font-semibold mb-4">{tour.location}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`${i < Math.floor(tour.rating) ? 'text-yellow-400' : 'text-gray-600'} w-5 h-5`} />
                  ))}
                  <span className="ml-2 text-gray-300 font-semibold">{tour.rating}</span>
                </div>
                <p className="text-gray-300 italic mb-4">"{tour.review}"</p>
                <p className="text-gray-400 text-sm font-medium">- {tour.reviewer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tours
