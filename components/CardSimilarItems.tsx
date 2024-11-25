import React from "react"
import { IoStar } from "react-icons/io5"

const CardSimilarItems = () => {
  type SimilarItem = {
    id: number
    src: string
    title: string
    price: string
    from: string
    star: number
    sold: number
  }

  const similarItems: SimilarItem[] = [
    {
      id: 1,
      src: "/kursi.jpg",
      title: "Kursi Ergonomic",
      price: "Rp1.200.000",
      from: "Jakarta Barat",
      star: 4.5,
      sold: 3,
    },
    {
      id: 2,
      src: "/laptop.jpg",
      title: "Laptop ROG",
      price: "Rp22.200.000",
      from: "Jakarta Pusat",
      star: 4.7,
      sold: 4,
    },
    {
      id: 3,
      src: "/sepatu.jpg",
      title: "Sepatu Homyped",
      price: "Rp250.000",
      from: "Bandung",
      star: 4.9,
      sold: 43,
    },
    {
      id: 4,
      src: "/earphone.jpg",
      title: "IEM Tangzu",
      price: "Rp200.000",
      from: "Jakarta Pusat",
      star: 5.0,
      sold: 10,
    },
    {
      id: 5,
      src: "/gamepad.jpg",
      title: "Gamepad Gamesir",
      price: "Rp200.000",
      from: "Tanggerang",
      star: 4.6,
      sold: 14,
    },
    {
      id: 6,
      src: "/mouse.jpg",
      title: "Rexus",
      price: "Rp800.000",
      from: "Bekasi",
      star: 4.9,
      sold: 15,
    },
    {
      id: 7,
      src: "/pixel.jpg",
      title: "Converse",
      price: "Rp4.200.000",
      from: "Jakarta Pusat",
      star: 4.7,
      sold: 12,
    },
    {
      id: 8,
      src: "/ssd.jpg",
      title: "Cooler Master",
      price: "Rp600.000",
      from: "Jakarta Utara",
      star: 5.0,
      sold: 10,
    },
    {
      id: 9,
      src: "/switch.jpg",
      title: "PS 5",
      price: "Rp2.200.000",
      from: "Jakarta Barat",
      star: 5.0,
      sold: 30,
    },
  ]

  return (
    <div
      id="card"
      className="bg-gradient-to-b from-black to-gray-900 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 xl:px-0 mx-auto flex flex-col w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Rekomendasi
          </p>
          <p className="py-6">
            Cek barang yang mirip berdasarkan histori pencarianmu!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 px-0 pb-20">
          {similarItems.map(({ id, src, title, price, from, star, sold }) => (
            <div
              key={id}
              className=" xl:w-[185px] xl:h-[300px] shadow-md shadow-gray-600 rounded-lg bg-black to-gray-800 bg-gradient-to-b cursor-pointer"
            >
              <div className="xl:h-[185px] content-center bg-white rounded-md">
                <img src={src} alt=" " className="rounded-md w-[100%]" />
              </div>
              <p className="pt-3 px-3 text-xs interLight">{title}</p>
              <p className="pt-2 px-3 text-sm font-bold">{price}</p>
              <p className="pt-2 px-3 text-xs interLight">{from}</p>
              <span className="flex items-center px-3 py-2">
                <IoStar color="yellow" size={13} />
                <p className="ml-1 text-xs interLight">
                  {star} | {sold} terjual
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSimilarItems
