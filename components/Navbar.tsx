import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiMap } from "react-icons/bi"
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="w-full fixed z-50">
        <div className="flex max-w-[1200px] justify-start gap-1 lg:gap-6 items-center mx-auto h-[3.75rem] pl-4 pr-4 lg:pr-16 text-gray-200 bg-blue-800">
          <Link href="/">
            <h1 className="text-2xl text-white lg:text-5xl font-poppins ml-2">
              JAMAZON
            </h1>
          </Link>

          <div className="collapse lg:visible flex items-center hover:underline hover:text-white cursor-pointer">
            <BiMap />
            <h2>&nbsp;Deliver to&nbsp;</h2>
            <h2 className="font-bold">Indonesia</h2>
          </div>

          <div className="hover:underline cursor-pointer grow">
            <div className="flex items-center w-full p-2">
              <input
                className="w-full text-black placeholder-gray-400 text-sm pl-3 mr-1 focus:outline-none border-gray-800 border-2 h-8"
                placeholder="Search for anything"
                type="text"
              />
              <button className="flex items-center hover:underline hover:text-white cursor-pointer">
                <AiOutlineSearch size={30} />
              </button>
            </div>
          </div>

          <div className="collapse lg:visible hover:underline hover:text-white cursor-pointer">
            <h2>EN</h2>
          </div>

          <div className="pr-2 lg:pr-0 hover:underline hover:text-white cursor-pointer">
            <h2>Sign in</h2>
          </div>

          <div className="hover:underline hover:text-white cursor-pointer">
            <h2>Cart</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
