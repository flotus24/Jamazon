"use client"

import { useState } from "react"
import { IoStar } from "react-icons/io5"

export default function Item() {
  const [choice, setChoice] = useState<string>("")

  type Item = {
    id: number
    src: string
    title: string
    price: string
    from: string
    star: number
    sold: number
  }

  const items: Item = {
    id: 1,
    src: "/kursi.jpg",
    title: "Kursi Gaming Fantech",
    price: "Rp1.200.000",
    from: "Jakarta Barat",
    star: 4.5,
    sold: 3,
  }

  function handleChoice(choice: string) {
    setChoice(choice)
    console.log(choice)
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex  pt-20 xl:px-0 px-3 pb-10">
        <img className="w-[40%] h-[40%] rounded-lg" src={items.src} />
        <div className="pl-10 w-full">
          <div className="font-bold text-2xl">{items.title}</div>
          <div className="flex interLight text-gray-300">
            {items.sold} •{" "}
            <span className="px-1 pt-[5px]">
              {" "}
              <IoStar color="yellow" size={13} />{" "}
            </span>{" "}
            {items.star} terjual
          </div>

          <div className="flex items-center justify-between">
            <div className="font-bold  text-3xl pt-2">{items.price}</div>
            <button>Add To Cart</button>
          </div>

          <div className="border-b py-1" />

          <div className="flex pt-3 pb-2 font-bold text-lg items-center">
            Pick Color: <span className="ml-2 font-normal">{choice}</span>
          </div>
          <div className="flex text-lg">
            <div>
              <input
                type="radio"
                className="hidden peer"
                name="choice"
                id="choice-1"
                value="White"
                onChange={(e) => handleChoice(e.target.value)}
              />
              <label
                className="relative text-blue-800 border-blue-800 hover:border-blue-500 hover:text-white peer-checked:bg-blue-500 peer-checked:text-white font-semibold py-1 px-3 mr-1 border rounded cursor-pointer"
                htmlFor="choice-1"
              >
                White
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="hidden peer"
                name="choice"
                id="choice-2"
                value="Silver"
                onChange={(e) => handleChoice(e.target.value)}
              />
              <label
                className="relative text-blue-800 border-blue-800 hover:border-blue-500 hover:text-white peer-checked:bg-blue-500 peer-checked:text-white font-semibold py-1 px-3 mr-1 border rounded cursor-pointer"
                htmlFor="choice-2"
              >
                Silver
              </label>
            </div>
            <div>
              <input
                type="radio"
                className="hidden peer"
                name="choice"
                id="choice-3"
                value="Black"
                onChange={(e) => handleChoice(e.target.value)}
              />
              <label
                className="relative text-blue-800 border-blue-800 hover:border-blue-500 hover:text-white peer-checked:bg-blue-500 peer-checked:text-white font-semibold py-1 px-3 mr-1 border rounded cursor-pointer"
                htmlFor="choice-3"
              >
                Black
              </label>
            </div>
          </div>
          {/* <div className="flex items-center">
              Condition: <span className="font-bold text-[17px] ml-2">New</span>
            </div> */}

          <div className="font-semibold pt-3 pb-1">Description:</div>
          <div className="interLight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            ultrices urna vitae rhoncus viverra. Ut ornare rutrum ullamcorper.
            Cras accumsan convallis dui, ut eleifend mauris iaculis vitae. Proin
            ac congue orci, sit amet scelerisque massa. Praesent eu gravida
            magna, sit amet dapibus dolor. Nulla et magna et odio lobortis
            finibus quis quis dolor. Ut pulvinar sagittis est, quis pretium nisi
            egestas sed. Aenean lacinia ligula quis blandit pulvinar. Fusce eros
            ex, tempor sit amet nunc in, accumsan tincidunt eros. Sed tempor
            eros quis odio malesuada, eu ultricies lacus porttitor. Nulla nunc
            leo, sodales id porttitor vel, aliquam ut dui. Etiam vitae lobortis
            lacus. Ut finibus, arcu a tincidunt facilisis, leo ex porta risus,
            at viverra justo mi lacinia dolor. Ut eu laoreet nisi, non blandit
            urna. Nunc lobortis sapien vestibulum fermentum mattis.{" "}
          </div>
        </div>
      </div>
    </div>
  )
}
