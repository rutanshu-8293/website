import { FaArrowUp } from "react-icons/fa";
import React, { useEffect, useState } from 'react'

const GoToTopArrow = () => {
    const [isVisible, setVisible] = useState(false)
    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = () => {
        let heigthToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(winScroll  > heigthToHidden){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",listenToScroll);
    },[])
  return (
    <div>
        { isVisible && (
            <div className='flex justify-center items-center'>
            <button className='text-[18px] w-[50px] h-[50px] text-white bg-orange-700 rounded-[50%] fixed bottom-5 right-5 z-10 flex items-center justify-center animate-bounce' onClick={goToBtn}><FaArrowUp />
            </button>
        </div>
        )
            
        }
        
    </div>
  )
}


export default GoToTopArrow
