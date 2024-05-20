import { useContext, useEffect, useState } from 'react'
import ROUTES from './routes/Routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios';
import MainContext from './context/context';
import Swal from "sweetalert2"
import toast from "react-hot-toast";

function App() {
  const router=createBrowserRouter(ROUTES)
  const [data,setData]=useState([])
  const [basketArr, setBasketArr] = useState(localStorage.getItem("Basket") ? JSON.parse(localStorage.getItem("Basket")) : [])
  localStorage.setItem("Basket", JSON.stringify(basketArr))
  let subTotal = 0

  basketArr.map((e) => subTotal += e.count * e.discountPrice)
  const addToBasket = (item) => {
    const existedProduct = basketArr.find((x) => x._id === item._id)
    if(existedProduct) {
         existedProduct.count++
         existedProduct.total = existedProduct.discountPrice * existedProduct.count
         setBasketArr([...basketArr])
         localStorage.setItem("Basket", JSON.stringify(basketArr))
         Swal.fire({
              title: "OOPS",
              text: "Item already in Basket",
              icon: "warning"
         });
         return
    }

    const total = item.discountPrice
    setBasketArr([...basketArr, {...item, count: 1, total}])
    Swal.fire({
         title: "Success",
         text: "Added to Basket",
         icon: "success"
    });
    return
}

const modifyCount = (increment, item) => {
    const existedProduct = basketArr.find((x) => x._id === item._id)
    if(existedProduct) {
         if(increment) {
              existedProduct.count++
              existedProduct.total = existedProduct.discountPrice * existedProduct.count
              setBasketArr([...basketArr])
              toast.success('Count Increase')

         } else if(existedProduct.count === 1) {
              removeFromBasket(item._id)
         } else {
              existedProduct.count--
              existedProduct.total = existedProduct.discountPrice * existedProduct.count
              setBasketArr([...basketArr])
              toast.success('Count Decrease')
         }
    } 
}

const removeFromBasket = (id) => {
    setBasketArr(basketArr.filter(item => item._id !== id))
    Swal.fire({
         title: "Success",
         text: "Successfully Removed from Basket",
         icon: "success"
    });
}
  const contextData={
    data,setData,basketArr, setBasketArr, subTotal, addToBasket, removeFromBasket, modifyCount
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/").then(res=>{
    setData(res.data)
  })
  },[])
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router} />  
    </MainContext.Provider>
  )
}

export default App
