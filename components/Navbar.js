import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdCart } from "react-icons/io";
import { useRef } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import { AiTwotonePlusCircle, AiTwotoneMinusCircle } from "react-icons/ai";


const Navbar = ({cart}) => {
  const sidebar = useRef()
  const handleToggle = () => {
    if (sidebar.current.classList.contains("translate-x-full")) {
      sidebar.current.classList.remove("translate-x-full")
      sidebar.current.classList.add("translate-x-0")
    } else {
      sidebar.current.classList.remove("translate-x-0")
      sidebar.current.classList.add("translate-x-full")
    }
  }
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
          <IoMdCart onClick={handleToggle} className="w-4 h-4 ml-1 text-purple-800" />
        </button>
      </div>

      <div className="cart p-0 pl-2 fixed top-0 right-0 h-full z-10 w-80 bg-purple-400 transform transition-all	 translate-x-full" ref={sidebar}>
        <IoIosCloseCircle onClick={handleToggle} className='absolute top-3 right-3 text-purple-800 text-2xl cursor-pointer' />
        <h2 className='m-5 font-bold text-purple-950 text-xl'>Cart</h2>
        <ol className='lining-nums'>

          {Object.keys(cart.liveCart).length == 0 && <div className='flex mt-2 mr-2 bg-purple-100 shadow-lg rounded-sm'>No Items in the Cart</div>}
          {Object.keys(cart.liveCart).map((k)=>(
          <li key={k} className='flex mt-2 mr-2 bg-purple-100 shadow-lg rounded-sm'>
            <div className="ml-2 pr-1 w-3/5">
              <p>{cart.liveCart[k].name}</p>
            </div>
            <div className="mr-2 w-2/5 text-xl justify-center items-center flex">
              <AiTwotoneMinusCircle onClick={()=>{cart.decreaseInCart(k)}} className='m-1 cursor-pointer' />
              <p>{cart.liveCart[k].qty}</p>
              <AiTwotonePlusCircle onClick={()=>{cart.increaseInCart(k)}} className='m-1 cursor-pointer' />
            </div>
          </li>
))}
<li className='flex mt-2 mr-2 bg-purple-100 shadow-lg rounded-sm'>
  Subtotal PKR {cart.subTotal}
</li>
        </ol>
        <button className='bg-purple-900 text-white mt-3 p-3 hover:bg-purple-500 rounded-sm'>Proceed To Checkout</button>
        <button onClick={cart.clearCart} className='ml-3 mr-0 bg-red-900 text-white mt-3 p-3 hover:bg-purple-500 rounded-sm'>Clear Cart</button>
      </div>
    </header>
  )
}

export default Navbar