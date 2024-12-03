import React from "react"

const CardSimilarItems = () => {
  type SimilarItem = {
    id: number
    src: string
    title: string
    quantity: string
  }

  const similarItems: SimilarItem[] = [
    {
      id: 1,
      src: "/Similar Product/kursi-oxihom.jpg",
      title: "Kursi Ergonomic",
      quantity: "100rb produk",
    },
    {
      id: 2,
      src: "/Similar Product/laptop-asus.jpg",
      title: "Laptop ASUS",
      quantity: "200rb produk",
    },
    {
      id: 3,
      src: "/Similar Product/sepatu-homyped.jpg",
      title: "Sepatu Homyped",
      quantity: "50rb produk",
    },
    {
      id: 4,
      src: "/Similar Product/IEM-tangzu.jpg",
      title: "IEM Tangzu",
      quantity: "10rb produk",
    },
    {
      id: 5,
      src: "/Similar Product/gamepad-gamesir.jpg",
      title: "Gamepad Gamesir",
      quantity: "20rb produk",
    },
    {
      id: 6,
      src: "/Similar Product/rexus.jpg",
      title: "Rexus",
      quantity: "300rb produk",
    },
    {
      id: 7,
      src: "/Similar Product/converse.jpg",
      title: "Converse",
      quantity: "100rb produk",
    },
    {
      id: 8,
      src: "/Similar Product/cooler-master.jpg",
      title: "Cooler Master",
      quantity: "250rb produk",
    },
    {
      id: 9,
      src: "/Similar Product/ps5.jpg",
      title: "PS 5",
      quantity: "70rb produk",
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

        <div className="grid grid-cols-3 gap-y-8 gap-x-6 px-0">
          {similarItems.map(({ id, src, title, quantity }) => (
            <div
              key={id}
              className="lg:w-[300px] lg:h-[125px] shadow-md shadow-gray-700 hover:shadow-gray-400 rounded-lg cursor-pointer"
            >
              <div className="lg:flex lg:h-[125px] content-center rounded-md">
                <img src={src} alt=" " className="rounded-md h-[100%]" />
                <div>
                  <p className="pt-2 xl:pt-9 px-3 text-sm font-bold">{title}</p>
                  <p className="py-2 px-3 text-xs interLight">{quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardSimilarItems
