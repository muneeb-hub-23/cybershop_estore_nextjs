/* eslint-disable @next/next/no-img-element */
import connectDB from '@/middleware/mongoose'
import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import products from '@/models/products'
const computers = ({computers}) => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4 justify-center">
  {computers.map((computer)=>(
    <div class="lg:w-1/4 md:w-1/2 p-4 m-4 w-full shadow-lg hover:transition hover:transition-all hover:scale-110 hover:animate-spin" key={computer._id}>
    <Link passHref={true} href={`/product/${computer.slug}`}>
      
        <img className='m-auto h-40 fill-current object-cover object-center block shadow-md' alt="ecommerce" src={computer.img} />
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{computer.category}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{computer.title}</h2>
          <p class="mt-1">PKR {computer.price}</p>
          <p class="mt-1">Available Qty {computer.availableQty}</p>
        </div>
    </Link>
    </div>
  ))}

    </div>
  </div>
</section>
  )
}
export const getServerSideProps = (async () => {
  if(!mongoose.connections[0].readyState){
    mongoose.connect("mongodb://127.0.0.1:27017/cybershop?directConnection=true&serverSelectionTimeoutMS=2000")
}
  const data = await products.find()
  let computers = await JSON.parse(JSON.stringify(data))
  return {props:{computers}}
})
export default computers