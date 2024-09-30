import React from 'react'
import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa";


function BackToTopButton() {
    const [visible, SetVisible] = useState(false)

    const toggle = ()=> {
        if (window.pageYOffset > 300) {
            SetVisible (true);
        }
        else {
            SetVisible (false);
        };
    }

    const buttonTop = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth",
    })
    }

    useEffect(() => {

        window.addEventListener ("scroll", toggle);
    
      return () => {
        window.removeEventListener ("scroll", toggle);
      }
    }, [])
    

  return (
    <div>
        {visible && (<button onClick={buttonTop} className='fixed p-3 text-xl bg-[#FF6746] hover:bg-black text-white rounded-full bottom-10 right-10' ><FaArrowUp /></button>)}
    </div>
  )
}

export default BackToTopButton