import React from 'react'
import { Link } from 'react-router-dom'
import { GrInstagram } from "react-icons/gr";
import { BsThreads } from "react-icons/bs";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <section className='bg-[#000000f6] text-white'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-between max-w-[1200px] 2xl:m-auto xl:m-auto gap-[40px] mx-8 py-[40px]'>
            <div>
               <Link to="/"> <img src="https://elektrix.wpengine.com/wp-content/themes/elektrix/assets/images/light-logo.svg" className="w-[200px]" alt="" /></Link>
                <p className='mt-5 leading-relaxed'>Ut eleifend mattis ligula, porta finibus tincidunt urna gravida at. Aenean maecenas vehiculles mattis arcu non mattis Integer</p>
            </div>
            
            <div className=''>
                <h2 className='text-2xl font-bold font-serif'>Pages</h2>
                <div className='flex flex-col w-[21%] mt-5 gap-4'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div>
                <h2 className='text-[20px] font-bold my-5'>Follow Us on social</h2>
                <div className='flex gap-3'>
                    <Link to="https://www.instagram.com/" target='_blank' className='bg-[#80808044] p-2 rounded font-bold text-[20px] hover:bg-[#0000fff8] hover:text-white transition-all duration-700 text-blue-500'><GrInstagram />
                    </Link>

                    <Link to="https://www.threads.net/" target='_blank' className='bg-[#80808044] p-2 rounded font-bold text-[20px] hover:bg-[#0000fff8] hover:text-white transition-all duration-700 text-blue-500'><BsThreads />
                    </Link>

                    <Link to="https://www.meta.com/" target='_blank' className='bg-[#80808044] p-2 rounded font-bold text-[20px] hover:bg-[#0000fff8] hover:text-white transition-all duration-700 text-blue-500'><FaMeta />
                    </Link>

                    <Link to="https://www.twitter.com/" target='_blank' className='bg-[#80808044] p-2 rounded font-bold text-[20px] hover:bg-[#0000fff8] hover:text-white transition-all duration-700 text-blue-500'><FaXTwitter />
                    </Link>

                    <Link to="https://www.whatsapp.com/" target='_blank' className='bg-[#80808044] p-2 rounded font-bold text-[20px] hover:bg-[#0000fff8] hover:text-white transition-all duration-700 text-blue-500'><FaWhatsapp />
                    </Link>
                </div>
                </div>
            </div>

            <div>
                <h2 className='text-2xl font-bold'>Payment</h2>
                <div className='flex flex-col gap-4 mt-5'>
                    <p className='flex items-center text-[18px] gap-3 font-medium text-[#ffffffc0]'><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Mastercard-Icon-1.svg" alt="" className='w-[50px] bg-[#80808044] p-1 rounded'/>Mastercard</p>
                    <p className='flex items-center text-[18px] gap-3 font-medium text-[#ffffffc0]'><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Skrill-Icon-1.svg" alt="" className='w-[50px]  bg-[#80808044] p-1 rounded'/>Skrill</p>
                    <p className='flex items-center text-[18px] gap-3 font-medium text-[#ffffffc0]'><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Gpay-Icon-1.svg" alt="" className='w-[50px]  bg-[#80808044] p-1 rounded'/>Apple Pay</p>
                    <p className='flex items-center text-[18px] gap-3 font-medium text-[#ffffffc0]'><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Visa-Icon-1.svg" alt="" className='w-[50px]  bg-[#80808044] p-1 rounded' />Visa</p>
                    <p className='flex items-center text-[18px] gap-3 font-medium text-[#ffffffc0]'><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Paypal-Icon-1.svg" alt="" className='w-[50px]  bg-[#80808044] p-1 rounded' />Paypal</p>
                </div>
            </div>
        </div>
        <p className='border-t text-center p-5 text-[18px]'>©Designthemes all rights Reserved</p>
      </section>
    </div>
  )
}

export default Footer
