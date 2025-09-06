import { useEffect, useState } from 'react'
import './App.css'
import Productlist from './Productlist'
import Header from './Header/Header'
import Hero from './Hero/Hero'

function App() {
  const [categories, setCategories] = useState([])
  const [products,setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categorySelected, setCategorySelected]= useState('all')

  const fetchCategories = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products/categories')
      const data = await res.json();
   

        setCategories(data)
        console.log(data)
      
    }
    catch (err) {
      console.log("this is not working", err)
    }
  }

  const fetchProducts = async () => {
    try{ const res = await fetch("https://fakestoreapi.com/products")
       const data = await res.json()
       setProducts(data)
       setFilteredProducts(data)
       console.log(data)
    }
    catch(err){
    console.log("this product not working",err)
    }
  }
  useEffect(()=> { 
    fetchProducts()
      fetchCategories()
  },[])
   
  useEffect(()=> {
    if (categorySelected === "all"){
      setFilteredProducts(products)
    }else {
      const filteredProducts = products.filter(product => product.category === categorySelected)
      setFilteredProducts(filteredProducts)
    }
  
  },[categorySelected, products])

  const handleCategory = (category) => {
setCategorySelected(category)
  }
  return (
    <>
    <Header/>
    <Hero/>
    <div className='category_Wrapper'>
       <button onClick={()=> handleCategory("all")}>Show all</button>
     
      {
        categories.map((item, index)=>{
          return <button  key={index} onClick={()=> handleCategory(item)}>{item}</button>
        })}

    </div>
     <div  className='product_wrapper'>
       {
        filteredProducts.map((product) =>  (<Productlist key={product.id} product={product}/>)  )
       }
     </div>
     
    </>
  )
}

export default App
