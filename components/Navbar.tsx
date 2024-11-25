import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { BiMap } from "react-icons/bi"

const Navbar = () => {
  return (
    <header>
      <div className="w-full fixed z-50">
        <div className="flex max-w-[1200px] justify-start gap-6 items-center mx-auto h-[3.75rem] pl-4 pr-16 text-white bg-blue-800">
          <div>
            <h1 className="text-5xl font-poppins ml-2">JAMAZON</h1>
          </div>

          <div className="flex items-center hover:underline cursor-pointer">
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
              <button className="flex items-center hover:bg-blue-500 cursor-pointer">
                <AiOutlineSearch size={30} />
              </button>
            </div>
          </div>

          <div className="hover:underline cursor-pointer">
            <h2>EN</h2>
          </div>

          <div className="hover:underline cursor-pointer">
            <h2>Hello, sign in</h2>
          </div>

          <div className="hover:underline cursor-pointer">
            <h2>Cart</h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
