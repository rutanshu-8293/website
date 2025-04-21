import React from 'react'
import teamData from './team.json'

const AboutUs = () => {
  return (
    <div className='bg-gray-50'>
       <div className='relative'>
        <img src="image/Elektrix-Breadcrump-Img.jpg" alt="" className='h-[400px] w-[100%]'/>
        <h2 className='top-40 absolute md:left-[40%] sm:left-[35%] left-[25%] text-white font-bold text-5xl'>About Us</h2>
      </div>

        <section className='max-w-[1200px] xl:m-auto 2xl:m-auto mx-8'>
          <h2 className='pt-10 text-center text-4xl font-bold'>Our Professional Team</h2>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10 py-8'>
            {
              teamData.map((item) => (
                <ul className='bg-[#80808001] rounded-xl'>
                  <div className='border border-gray-400 rounded-xl'>
                  <li className='h-[250px] w-[100%] overflow-hidden rounded-t-xl cursor-pointer'><img src={item.image} alt="" className='hover:scale-110 duration-500 h-[100%] w-[100%] rounded-t-xl'/></li>
                  <div className='py-5 rounded-b-xl bg-white'>
                    <li className='text-center text-[22px] hover:text-blue-600 cursor-pointer duration-500 font-bold pb-1'>{item.name}</li>
                    <li className='font-semibold text-[#000000c5] text-center'>{item.work}</li>
                  </div>
                  </div>
                </ul>
              ))
            }
            </div>
        </section>
    </div>
  )
}

export default AboutUs
