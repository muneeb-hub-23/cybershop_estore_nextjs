import React, { useEffect, useState } from 'react'
import products from '@/models/products'
import mongoose from 'mongoose'
import stock from '@/models/stock'
import styles from '../../styles/product.module.css'
//import { ToastContainer,toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
const Slug = ({ product,cart }) => {

  const [check, setCheck] = useState()
  const [postCode, setPostCode] = useState()
  const [selectedColor,setselectedColor] = useState(product[0].stock.colors[0].colorName)
  const [selectedSizes,setSelectedSizes] = useState(product[0].stock.colors[0].details.size)
  const [selectedQty,setSelectedQty] = useState(product[0].stock.colors[0].details.size[0].qty)
  const handleChange = (e) => {
    setPostCode(e.target.value)
  }
  const handleCheck = async () => {
    const codes = await fetch("http://localhost:3000/api/getcodes")
    const codesJson = await codes.json()
    if (codesJson.includes(parseInt(postCode))) {
      setCheck(true)
    } else {
      setCheck(false)
    }
  }
  const handleColorChange = async(e)=>{
    // toast('🦄 Wow so easy!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition: Bounce,
    //   });
    const blueItem = product[0].stock.colors.find(item => item.colorName === e);
    setSelectedSizes(blueItem.details.size)
    const newQty = blueItem.details.size[0]
    setSelectedQty(newQty.qty)
  }
  const changeQty = async(e)=>{
    const newQty = selectedSizes.find(item => item.size_name === e.target.value);
    setSelectedQty(newQty.qty)

  }

  const colors = product[0].stock.colors.map((color)=>(
                  
   <span  key={color.colorName} onClick={()=>{handleColorChange(color.colorName)}} className={`border-2 border-gray-300 ${styles[color.colorName]} rounded-full w-6 h-6 focus:outline-none cursor-pointer`}></span>
    
  ))
  const sizes = selectedSizes.map((size)=>(
    <option key={size.size_name}>{size.size_name}</option>

  ))

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product[0].img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{product[0].category}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product[0].title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{product[0].desc}</p>





            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">

                <span className="mr-3">Color</span>
                {colors}

              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select onChange={changeQty} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10">
                  {sizes}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
                <span className="ml-3 mr-3">Available Qty</span>
                <span className="mr-3 text-green-500">{selectedQty}</span>
              </div>
            </div>





            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">PKR {product[0].price}</span>
              <button onClick={() => { cart.addToCart(product[0]._id, product[0].title, selectedSizes[0].size_name, selectedColor, 1, product[0].price) }} className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Add To Cart</button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="flex w-100 mt-5 pr-1">
              <input value={postCode} onChange={handleChange} placeholder='Enter Your Postal Code' type="text" className='w-50 border-2 ml-1 mr-1' />
              <button onClick={handleCheck} className="flex ml-auto mr-12 text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Check Availability</button>

            </div>
            {check !== null && check ? (<p className='ml-1 mt-1 text-green-400'>We Serve in this location</p>) : (<p className='ml-1 mt-1 text-red-500'>We Don not serve in this location</p>)}
          </div>

        </div>

      </div>
    </section>
  )
}
export const getServerSideProps = (async (context) => {
  const { slug } = context.query

  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI)
  }

  let product = await products.find({ _id: slug })
  let Stock = await stock.find({ product_ID: slug })

  product = await JSON.parse(JSON.stringify(product))
  Stock = await JSON.parse(JSON.stringify(Stock))
  product[0].stock = Stock[0]
  return { props: { product } }
})
export default Slug