import React from 'react'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'
import {useRef,useEffect,useState} from 'react'
import ScrollReveal from 'scrollreveal'

const Trynow = () => {
    let [Open,setOpen] = useState(false)
    const ref = useRef(null)
    useEffect(()=>{
        ScrollReveal().reveal(ref.current,{
            origin:"bottom",
            distance: "100px",
            opacity:0,
            duration: 1000
        })
    },[])
  return (
    <div  className='min-w-screen z-40jusity-center align-center flex'>
    
        <NavLink ref={ref} to="/trynow" on onMouseLeave={()=>setOpen(false)} onMouseEnter={()=>setOpen(true)} className="rounded-md hover:scale-125 text-2xl mx-auto my-20 bg-indigo-600 z-40 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
            TRY NOW
            {Open &&  <>{" "}&rarr;</>}
        </NavLink>
    </div>
  )
}

export default Trynow
