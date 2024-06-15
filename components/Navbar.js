import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  <Image alt={"Cyber Sho"} src={"/logo.png"} priority="lazyOnLoad" width={450} height={250} className="w-20 h-10 rounded-full" />
      <span className="ml-3 text-xl">Cyber Shop</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'/Computers'} className="mr-5 hover:text-gray-900">Computers</Link>
      <Link href={'/Laptops'} className="mr-5 hover:text-gray-900">Laptops</Link>
      <Link href={'/Accessories'} className="mr-5 hover:text-gray-900">Accessories</Link>
      <Link href={'/Networking'} className="mr-5 hover:text-gray-900">Networking</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <IoMdCart className="w-4 h-4 ml-1 text-purple-800"/>
    </button>
  </div>
</header>
  )
}

export default Navbar