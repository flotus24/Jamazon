import React from "react"
import { IoStar } from "react-icons/io5"

const CardItems = () => {
  type Item = {
    id: number
    src: string
    title: string
    price: string
    from: string
    star: number
    sold: number
  }

  const items: Item[] = [
    {
      id: 1,
      src: "/kursi.jpg",
      title: "Kursi Gaming Fantech",
      price: "Rp1.200.000",
      from: "Jakarta Barat",
      star: 4.5,
      sold: 3,
    },
    {
      id: 2,
      src: "/laptop.jpg",
      title: "Laptop Lenovo ideapad i3",
      price: "Rp22.200.000",
      from: "Jakarta Pusat",
      star: 4.7,
      sold: 4,
    },
    {
      id: 3,
      src: "/sepatu.jpg",
      title: "Sepatu Bagus",
      price: "Rp250.000",
      from: "Bandung",
      star: 4.9,
      sold: 43,
    },
    {
      id: 4,
      src: "/earphone.jpg",
      title: "Earphone JBL Murah",
      price: "Rp200.000",
      from: "Jakarta Pusat",
      star: 5.0,
      sold: 10,
    },
    {
      id: 5,
      src: "/gamepad.jpg",
      title: "Gamepad Rexus G300",
      price: "Rp200.000",
      from: "Tanggerang",
      star: 4.6,
      sold: 14,
    },
    {
      id: 6,
      src: "/mouse.jpg",
      title: "Mouse Logitech G102",
      price: "Rp800.000",
      from: "Bekasi",
      star: 4.9,
      sold: 15,
    },
    {
      id: 7,
      src: "/pixel.jpg",
      title: "Pixel 8 Pro Resmi Bea Cukai",
      price: "Rp4.200.000",
      from: "Jakarta Pusat",
      star: 4.7,
      sold: 12,
    },
    {
      id: 8,
      src: "/ssd.jpg",
      title: "Teamgroup SSD 520GB",
      price: "Rp600.000",
      from: "Jakarta Utara",
      star: 5.0,
      sold: 10,
    },
    {
      id: 9,
      src: "/switch.jpg",
      title: "Nintendo Switch Baru",
      price: "Rp2.200.000",
      from: "Jakarta Barat",
      star: 5.0,
      sold: 30,
    },
    {
      id: 10,
      src: "/wajan.jpg",
      title: "Wajan Stainless Steel",
      price: "Rp200.000",
      from: "Jakarta Pusat",
      star: 4.8,
      sold: 22,
    },
  ]

  return (
    <div id="card" className="bg-gray-900 w-full text-white">
      <div className="max-w-screen-lg p-4 xl:px-0 mx-auto flex flex-col w-full h-full">
        <div className="pb-2">
          <p className="py-6">Berdasarkan pencarianmu</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 px-0 pb-20">
          {items.map(({ id, src, title, price, from, star, sold }) => (
            <div
              key={id}
              className=" xl:w-[185px] xl:h-[300px] shadow-md shadow-gray-700 hover:shadow-gray-400 rounded-lg bg-gray-950 cursor-pointer"
            >
              <div className="xl:h-[185px] content-center bg-white rounded-md">
                <img src={src} alt=" " className="rounded-md w-[100%]" />
              </div>
              <p className="pt-3 px-3 text-xs interLight">{title}</p>
              <p className="pt-2 px-3 text-sm font-bold">{price}</p>
              <p className="pt-2 px-3 text-xs interLight">{from}</p>
              <div className="flex items-center px-3 py-2">
                <IoStar color="yellow" size={13} />
                <p className="ml-1 text-xs interLight">
                  {star} | {sold} terjual
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardItems
