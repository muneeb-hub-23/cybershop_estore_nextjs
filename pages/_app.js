import '../app/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
function MyApp({ Component, pageProps }) {
const [liveCart,setLiveCart] = useState({})
useEffect(()=>{
  if(localStorage.getItem("cart")){
    var localcart = JSON.parse(localStorage.getItem("cart"))
    setLiveCart(localcart)
  }
},[])
const addToCart = (seriel,name,size,color,qty,price)=>{
let tempCart = liveCart

if(tempCart[seriel]){
  let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty+qty}}
  setLiveCart(newcart)
  saveCart(JSON.stringify(newcart))
}else{
  let newcart = {...tempCart,[seriel]:{seriel,name,size,color,qty,price}}
  setLiveCart(newcart)
  saveCart(JSON.stringify(newcart))
}




}
const removeFromCart = (seriel)=>{

}
const increaseInCart = (seriel)=>{
let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty+1}}
setLiveCart(newcart)
saveCart(JSON.stringify(newcart))
}
const decreaseInCart = (seriel)=>{
  let newcart = {...liveCart,[seriel]:{...liveCart[seriel],qty:liveCart[seriel].qty-1}}
  setLiveCart(newcart)
  saveCart(JSON.stringify(newcart))
if(liveCart[seriel].qty-1 == 0){

  setLiveCart(current => {
    delete current[seriel]
    saveCart(JSON.stringify(current))
    return current;
  });

}
}
const saveCart = (myCart)=>{
  localStorage.setItem("cart",myCart)
}
const clearCart = ()=>{
setLiveCart({})
localStorage.removeItem("cart")
//saveCart({})
}


  return(
  <>
  <Navbar liveCart = {liveCart} cart = {{addToCart,removeFromCart,increaseInCart,decreaseInCart,liveCart,setLiveCart,clearCart}}/>
  <Component cart = {{addToCart,removeFromCart,increaseInCart,decreaseInCart,setLiveCart,liveCart,clearCart}} {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp