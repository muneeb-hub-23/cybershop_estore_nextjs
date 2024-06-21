import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { AiTwotonePlusCircle, AiTwotoneMinusCircle } from "react-icons/ai";

const Checkout = ({cart,subTotal}) => {
  return (
<section className="text-gray-600 body-font relative">
  <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
    
    <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden sm:mr-1 p-1 flex items-center justify-center relative">

      <div className="cart bg-purple-50 p-0 pl-2 h-[100%] w-[100%] shadow-md">
        <h2 className='m-5 font-bold text-xl text-black text-center'>Review Cart</h2>
        <ol className='lining-nums'>

          {Object.keys(cart.liveCart).length == 0 && <div className='flex mt-2 mr-2 bg-purple-100 shadow-lg rounded-sm'>No Items in the Cart</div>}
          {Object.keys(cart.liveCart).map((k)=>(
          <li key={k} className='flex mt-2 mx-5 bg-purple-100 shadow-lg rounded-sm hover:transition-all hover:scale-105'>
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
<li className='flex mt-2 mx-5 bg-purple-100 shadow-lg rounded-sm'>
  Subtotal PKR {cart.subTotal}
</li>
        </ol>
      </div>
    </div>


        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Delivery Details</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Enter Your Delivery details to continue</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-22 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Pay Bill</button>
        </div>
      </div>
    </section>
  )
}

export default Checkout