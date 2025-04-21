import React, { useState } from 'react'
import cardData from './data.json'
import {Rating} from '@mui/material'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from '../layouts/Card';
import home1 from '../layouts/home1.jpg'
import home2 from '../layouts/home2.jpg'


const Home = () => {
  const [itemData, setItemData] = useState(cardData);

  const filterProduct = (catagoryItem) => {
    const updatedItem = cardData.filter((item) => {
      return item.catagory === catagoryItem
    })
    setItemData(updatedItem)
  }

  return (
    <div>
      <div className='h-[500px]'>
       <img src="image/bgimage.jpg" alt="" className='w-[100%] h-[100%]'/>
      </div>
      
      <section className='max-w-[1200px] 2xl:m-auto xl:m-auto xl:my-5 mx-8 mt-5 hidden md:block'>
        <div className='grid grid-cols-3 gap-[20px]'>
          <div className='h-[200px] '>
            <img src="image/home-1.jpg" alt="" className='w-[100%] h-[100%]'/>
          </div>

          <div className='h-[200px]'>
            <img src="image/home-2.jpg" alt="" className='w-[100%] h-[100%]'/>
          </div>

          <div className='row-span-2 h-[420px]'>
            <img src="image/home-03.jpg" alt="" className='w-[100%] h-[100%]'/>
          </div>

          <div className='col-span-2 h-[200px]'>
            <img src="image/home-4.jpg" alt="" className='w-[100%] h-[100%]'/>
          </div>
        </div>
      </section>

      <h2 className='font-bold text-[30px] text-center capitalize my-10'>our Featured products</h2>
      
      <div className='max-w-[1200px] m-auto gap-5 flex flex-wrap items-center justify-center mb-10'>
        <button className='bg-orange-500 text-white w-[150px] h-[50px] rounded cursor-pointer text-[20px]' onClick={() => setItemData(cardData)}>All Product</button>
        <button className='bg-orange-500 text-white w-[150px] h-[50px] rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Appliances')}>Appliances</button>
        <button className='bg-orange-500 text-white w-[150px] h-[50px] p-2 rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Camera')}>Camera</button>
        <button className='bg-orange-500 text-white w-[150px] h-[50px] p-2 rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Gadgets')}>Gadgets</button>
        <button className='bg-orange-500 text-white  w-[150px] h-[50px] p-2 rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Gaming Accessories')}>Accessories</button>
        <button className='bg-orange-500 text-white w-[150px] h-[50px] p-2 rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Home Audio')}>Home Audio</button>
        <button className='bg-orange-500 text-white  w-[150px] h-[50px] p-2 rounded cursor-pointer text-[20px]' onClick={() => filterProduct('Smartwatches')}>Smartwatches</button>
      </div>

      <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-w-[1200px] gap-8 2xl:m-auto xl:m-auto mx-8'>
        {
          itemData.map((item) => (
            <ul className='bg-[#80808001]'>
              <div className='border border-gray-400 rounded'>
              <li className='h-[220px] w-[100%]'><img src={item.image} alt="" className='h-[100%] w-[100%] border-b'/></li>
              <li className='text-center text-[20px] font-bold py-2'>{item.name}</li>
              <div className='flex justify-between mx-2 my-3 items-center'>
                <li><Rating name="size-small" defaultValue={2} size='medium' /></li>
                <li className='font-semibold'>{item.price}</li>
              </div>
              <li className='my-4 justify-center flex'><button className='p-2 gap-2 rounded flex items-center bg-orange-500 text-white'>Buy Now<FaShoppingCart /></button></li>
              </div>
            </ul>
          ))
        }
      </div>

      <div className='max-w-[1200px] xl:m-auto 2xl:m-auto pt-8 mx-8'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
          <Card image={home1} title="Smart Watch" stitle="with motion tracking" discription="Habitasse Platea dictumst quisque sagittis purus sit volutpate." price="Starts From - $290"/>
          <Card image={home2} title="Mac Book" stitle="Audio Supported" discription="Lobortis scelerisque fermentum dui odiout enim faucibus ornare." price="Starts From - $375"/>
        </div>
      </div>
      
      <div className='max-w-[1200px] m-auto border my-8 rounded-2xl bg-[#0000ff0a]'>
        <div className='flex flex-col justify-center items-center gap-4 mt-16'>
          <button className='py-[5px] px-6 border-2 text-blue-800 border-blue-800 rounded-3xl font-semibold text-[16px]'>View Latest Products</button>
          <h2 className='xs:text-[40px] text-[25px] flex items-center font-bold font-sans'>@ elektrix Instagram</h2>
        </div>

        <div className='grid justify-center 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-5 px-10 py-10'>

          <Link to="https://www.instagram.com/" target='_blank'>
          <div className='w-full z-0 h-[200px] overflow-hidden cursor-pointer rounded-2xl hover:opacity-85 duration-500'>
           <img src="image/Elektrix-insta-img1.jpg" alt="" className='w-[100%] h-[100%] hover:scale-110 duration-500'/>
          </div>
          </Link>

          <Link to="https://www.instagram.com/" target='_blank'>
          <div className='w-full h-[200px] overflow-hidden cursor-pointer rounded-2xl hover:opacity-85 duration-500 sm:block hidden'>
           <img src="image/Elektrix-insta-img2.jpg" alt="" className='w-[100%] h-[100%] hover:scale-110 duration-500'/>
          </div>
          </Link>

          <Link to="https://www.instagram.com/" target='_blank'>
          <div className='w-full h-[200px] overflow-hidden cursor-pointer rounded-2xl hover:opacity-85 duration-500 hidden xs:block'>
           <img src="image/Elektrix-insta-img3.jpg" alt="" className='w-[100%] h-[100%] hover:scale-110 duration-500'/>
          </div>
          </Link>

          <Link to="https://www.instagram.com/" target='_blank'>
          <div className='w-full h-[200px] overflow-hidden cursor-pointer rounded-2xl hover:opacity-85 duration-500 sm:block hidden'>
           <img src="image/Elektrix-insta-img4.jpg" alt="" className='w-[100%] h-[100%] hover:scale-110 duration-500'/>
          </div>
          </Link>

          <Link to="https://www.instagram.com/" target='_blank'>
          <div className='w-full h-[200px] overflow-hidden cursor-pointer rounded-2xl hover:opacity-85 duration-500 sm:block hidden'>
           <img src="image/Elektrix-insta-img6.jpg" alt="" className='w-[100%] h-[100%] hover:scale-110 duration-500'/>
          </div>
          </Link>

        </div>
        
      </div>
    
    </div>
    
  )
}

export default Home
