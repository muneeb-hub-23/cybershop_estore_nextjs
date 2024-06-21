import '../app/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
const [liveCart,setLiveCart] = useState({})
const [subTotal,setSubTotal] = useState(800)
useEffect(()=>{
  if(localStorage.getItem("cart")){
    var localcart = JSON.parse(localStorage.getItem("cart"))
    setLiveCart(localcart)
    setSubTotal(countSubTotal(localcart))
  }
},[])
const countSubTotal = (obj)=>{
  var total = 0
  const array = Object.keys(obj)
  for(var c=0; c<array.length; c++){
    total+=(obj[array[c]].price*obj[array[c]].qty)
  }
  return total
}
const addToCart = (seriel,name,size,color,qty,price)=>{
let tempCart = liveCart

if(tempCart[seriel]){
  let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty+qty}}
  setLiveCart(newcart)
  saveCart(JSON.stringify(newcart))
  setSubTotal(countSubTotal(newcart))
}else{
  let newcart = {...tempCart,[seriel]:{seriel,name,size,color,qty,price}}
  setLiveCart(newcart)
  saveCart(JSON.stringify(newcart))
  setSubTotal(countSubTotal(newcart))
}
}
const removeFromCart = (seriel)=>{

}
const increaseInCart = (seriel)=>{
let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty+1}}
setLiveCart(newcart)
setSubTotal(countSubTotal(newcart))
saveCart(JSON.stringify(newcart))
}
const decreaseInCart = (seriel)=>{
  let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty-1}}
  setLiveCart(newcart)
  setSubTotal(countSubTotal(newcart))
  saveCart(JSON.stringify(newcart))
if(liveCart[seriel].qty-1 == 0){

  setLiveCart(current => {
    delete current[seriel]
    saveCart(JSON.stringify(current))
    setSubTotal(countSubTotal(current))
    return current;
  });

}
}
const saveCart = (myCart)=>{
  localStorage.setItem("cart",myCart)
}
const clearCart = ()=>{
setSubTotal(0)
setLiveCart({})
localStorage.removeItem("cart")
//saveCart({})
}


  return(
  <>
  <Navbar liveCart = {liveCart} cart = {{subTotal,addToCart,removeFromCart,increaseInCart,decreaseInCart,liveCart,setLiveCart,clearCart}}/>
  <Component  cart = {{subTotal,addToCart,removeFromCart,increaseInCart,decreaseInCart,setLiveCart,liveCart,clearCart}} {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp