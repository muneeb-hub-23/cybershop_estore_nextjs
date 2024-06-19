import React, { useEffect } from 'react'

const Addstock = () => {


useEffect(()=>{
const getdata = async ()=>{
let products = await fetch("http://localhost:3000/api/getproducts")
let stock = await fetch("http://localhost:3000/api/getstock")
products = await products.json()
stock = await stock.json()

console.log(products,stock)

}
getdata()


},[])
  return (
    <div>

    

    </div>
  )
}

export default Addstock