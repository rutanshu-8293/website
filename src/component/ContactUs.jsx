import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";


const ContactUs = () => {
  return (
    <div className='bg-gray-50'>
      <div className='relative'>
        <img src="image/Elektrix-Breadcrump-Img.jpg" alt="" className='h-[400px] w-[100%]'/>
        <h2 className='top-40 absolute md:left-[40%] sm:left-[35%] left-[25%] text-white font-bold text-5xl'>Contact Us</h2>
      </div>

      <div className='max-w-[1200px] 2xl:m-auto xl:m-auto mx-8'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d476495.0429071386!2d72.85835356853362!3d21.087933085700318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!3m2!1d21.170240099999997!2d72.8310607!5e0!3m2!1sen!2sin!4v1736596701769!5m2!1sen!2sin" width="600" height="450" style={{border:"1px solid black",width:"100%",borderRadius:"5px", marginTop:"30px" }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <section className='grid lg:grid-cols-2 gap-10 max-w-[1200px] 2xl:m-auto xl:m-auto mx-8 pb-10' style={{marginTop:"30px"}}>
        <div className='mb-2'>
          <h2 className='text-3xl font-bold'>Get In Touch</h2>
          <p className='my-5 text-[17px]'>Leo duis ut diam quam nulla porttitor massa id. Dictum at tempor commodo ullamcorper. Sit amet cursus sit amet sit amet commodo dictum.</p>

          <div className='grid sm:grid-cols-2 mt-5 h-[250px] gap-10'>
            <div className='flex flex-col justify-between'>
              <div className='flex gap-3 mb-6 items-center'>
                <div className='p-3 border border-1 text-[25px] text-blue-800 flex items-center justify-center rounded-xl bg-white'>
                 <FaLocationDot />
                </div>
                <div>
                  <h2 className='text-[22px] font-bold'>Regional Office</h2>
                  <p className='pt-1 text-[18px] font-semibold text-gray-600'>SR, Seestrasse St, Zurich, CH</p>
                </div>
              </div>

               <div className='flex gap-3 items-center'>
                <div className='p-3 border border-1 text-[25px] text-blue-800 flex items-center justify-center rounded-xl bg-white'>
                <IoChatbubbleEllipsesOutline />
                </div>
                <div>
                  <h2 className='text-[22px] font-bold'>Chat With Us </h2>
                  <p className='pt-1 text-[18px] font-semibold text-gray-600'>Get live chat support</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between'>
              <div className='flex gap-3 mb-6 items-center'>
                <div className='p-3 border border-1 text-[25px] text-blue-800 flex items-center justify-center rounded-xl bg-white'>
                <MdEmail />
                </div>
                <div>
                  <h2 className='text-[22px] font-bold'>Mail Us</h2>
                  <p className='pt-1 text-[18px] font-semibold text-gray-600'>support@example.com</p>
                </div>
              </div>

               <div className='flex gap-3 items-center'>
                <div className='p-3 border border-1 text-[25px] text-blue-800 flex items-center justify-center rounded-xl bg-white'>
                <BiPhoneCall />
                </div>
                <div>
                  <h2 className='text-[22px] font-bold'>Call Us </h2>
                  <p className='pt-1 text-[18px] font-semibold text-gray-600'>+00 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border border-gray-400 rounded-3xl p-10 bg-white mt-[70px] sm:mt-0'>
          <form>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' className='border p-3 w-[100%] rounded-2xl border-black bg-gray-50 text-[18px]' required/><br/><br/>

                <input type="email" name="email" id="email" placeholder='Enter Your email' className='border p-3 w-[100%] rounded-2xl border-black bg-gray-50 text-[18px]' required/><br/><br/>

                <input type="number" name="number" id="number" placeholder='Enter Your Phone Number' className='border p-3 w-[100%] rounded-2xl border-black bg-gray-50 text-[18px]' required/><br/><br/>

                <input type="text" name="mess" id="mess"  placeholder='Enter Your Message' className='border w-[100%] p-3 rounded-2xl border-black bg-gray-50 text-[18px]' required/><br/><br/>

                <button type='submit' className='border-none px-5 py-2 rounded-2xl bg-blue-600 w-[100%] text-white text-[20px]'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
