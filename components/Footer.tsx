import React from "react"

const Footer = () => {
  return (
    <footer className="sticky top-[100vh]">
      <div className="flex justify-center items-center w-full h-[3.75rem] px-4 text-white bg-blue-800">
        <p className="">Back to top</p>
      </div>
      <hr />
      <div className="flex justify-center items-center w-full h-[3.75rem] px-4 text-white bg-blue-800">
        <p className="text-sm">
          © 1996-2023, Jamazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  )
}

export default Footer
