"use client"

import React, { useState, useEffect } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  type Slide = {
    id: number
    src: string
    desc: string
  }

  const slides: Slide[] = [
    {
      id: 1,
      src: "/Banner/Banner1.PNG",
      desc: "Banner pertama",
    },
    {
      id: 2,
      src: "/Banner/Banner2.PNG",
      desc: "Banner kedua",
    },
    {
      id: 3,
      src: "/Banner/Banner3.PNG",
      desc: "Banner ketiga",
    },
  ]

  useEffect(() => {
    const intervalSlider = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 3000) // Adjust the interval as needed

    return () => clearInterval(intervalSlider)
  }, [slides.length])

  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = (): void => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div id="slider" className="w-full text-white">
      <div className="max-w-screen-lg p-4 pt-20 xl:px-0 mx-auto flex flex-col justify-center w-full h-[500px] group relative cursor-pointer">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].src})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover"
        ></div>
        <button
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
        >
          <BsChevronCompactLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer"
        >
          <BsChevronCompactRight size={30} />
        </button>
      </div>
    </div>
  )
}

export default Slider
