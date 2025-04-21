import React from 'react'

const Card = ({image,title,stitle,discription,price}) => {
  return (
    <div>
        <div className='border border-[#000000b0] rounded-2xl flex flex-col items-center sm:flex-row gap-5 py-5 px-7 bg-[#ebfbff] hover:bg-[#fceaee]'>
            <div>
                <h2 className='text-4xl font-bold pb-1'>{title}</h2>
                <p className='text-2xl font-bold'>{stitle}</p>
                <p className='pt-5 text-[18px] font-sans'>{discription}</p>
                <p className='pt-8 hover:border-b border-[#0000ffd3] hover:text-blue-700 cursor-pointer font-semibold text-[18px] w-[60%]'>{price}</p>
            </div>
            <div className='w-[75%] h-[250px] cursor-pointer'>
                <img src={image} alt="" className='w-[100%] h-[100%] hover:scale-105 duration-500'/>
            </div>
            
        </div>
    </div>
  )
}

export default Card
