import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react'
import Heading from './Heading'
import ScrollReveal from 'scrollreveal'
import { NavLink } from 'react-router-dom'
import Step1 from '../../assets/step1.json'
import Step2 from '../../assets/step2.json'
import p3 from '../../assets/3.json'
import p2 from '../../assets/2.json'
import p1 from '../../assets/1.json'
import arrow from '../../assets/arrow.json'
import arrow2 from '../../assets/arrow2.json'
import Step3 from '../../assets/step3.json'
import Step31 from '../../assets/step31.json'
import Trynow from './Trynow';
const Usage = () => {
  let [open,setOpen] = useState(false)
  let ref1 = useRef(null)
  let ref2 = useRef(null)  
  let ref3 = useRef(null)
  let ref4 = useRef(null)
  let ref5 = useRef(null)
  useEffect(()=>{
    ScrollReveal().reveal(ref1.current,{
      origin: "bottom",
      distance: "200px",
      duration: 1500,
      opacity: 0,
    })
    ScrollReveal().reveal(ref2.current,{
      origin: "bottom",
      distance: "200px",
      duration: 1000,
      opacity: 0
    })
    ScrollReveal().reveal(ref3.current,{
      origin: "bottom",
      distance: "200px",
      duration: 1000,
      opacity: 0
    })
    ScrollReveal().reveal(ref4.current,{
      origin:"top",
      distance: "10px",
      opacity:0,
      duration: 1000
    })
    ScrollReveal().reveal(ref5.current,{
      origin:"top",
      distance: "10px",
      opacity:0,
      duration: 1000
    })
  },[])



  return (
    <div>
      <Heading/>


      
      <div className="bg-white">
      
        <div  className="mx-auto max-w-7xl mb-0 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        
          <div ref={ref1} className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <span className=' mt-4 mx-4 pl-2 font-medium'>
            
            <Lottie className='h-24 w-24' animationData={p1}/>
            </span>
            
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div  className="min-w-lg mr-50  flex-auto py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                Get a Chest  X-Ray Image 
              </h2>
              <br />
              <h2 className="text-xl font-bold tracking-tight text-indigo-600">
                Preferably Anteroposterior(AP) Chest X-Ray image
              </h2>
              <p className="mt-6 w-80 text-lg leading-8 text-gray-800">
                The chest X-Ray Images will be the source of pneomia detection for our AI model</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#step2"
                  className="rounded-md z-40 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Done
                </a>
              </div>
            </div>
            <div className="mr-0">
            <Lottie
              className="absolute mt-12 ml-60 pl-60 left-20 top-0"
              animationData={Step1}
            />
            </div>
          </div>
        </div>
      </div>


      <div ref={ref4} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} className='flex justify-center pt-32 items-center w-screen'>
        <Lottie loop={open} className='-rotate-90 rotate-30 h-60 w-60- ' animationData={arrow} />
      </div>


      <div className="bg-white">
      
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        
          <div ref={ref2}  className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <span className=' mt-4 mx-4 pl-2 font-medium'>
            <Lottie className='h-24 w-24' animationData={p2}/>
            </span>
            
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div id='step2' className="min-w-lg mr-40 flex-auto py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                Upload Image to <br />Pneumo.ai 
              </h2>
              <br />
              <h2 className="text-xl font-bold tracking-tight text-indigo-600">
                Upload the chest X-Ray image in the website 
              </h2>
              <p className="mt-6 w-80 text-lg leading-8 text-gray-800">
              After uploading the image, initiate the detection. Our AI algorithm will analyze the X-ray for pneumonia signs.
              Wait for the</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#step3"
                  className="rounded-md z-40 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Done
                </a>
              </div>
            </div>
            <div className="mr-0 ml-8">
            <Lottie
              className="absolute mt-12 gap-2 ml-60 pl-60 left-20 top-0"
              animationData={Step2}
            />
            </div>
          </div>
        </div>
      </div>

      <div ref={ref5} onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)} className='flex justify-center pt-2 items-center w-screen'>
        <Lottie className='rotate-90 h-60 w-60-' loop={open} animationData={arrow2} />
      </div>

      <div className="bg-white">
      
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        
          <div  ref={ref3}  className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <span className=' mt-4 mx-4 pl-2 font-medium'>
            <Lottie className='h-24 w-24' animationData={p3}/>
            </span>
            
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div id='step3' className="min-w-lg  mr-40 left-20  flex-auto py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                Check the Result 
              </h2>
              <br />
              <h2 className="text-xl font-bold tracking-tight text-indigo-600">
                Our AI doctors will process you a <br /> result based on the image
              </h2>
              <p className="mt-6 w-80 text-lg leading-8 text-gray-800">
              The results will be shown once the process completes. The patient needs to take action based on the prediction. You can also use our services.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#step1"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Read Again 
                </a>
              </div>
            </div>
            <div className="mr-0">
            <Lottie
            height={10}
              className="absolute mt-12 ml-60 pl-60 left-20 -top-50"
              animationData={Step3}
            />
            </div>
          </div>
        </div>
      </div>

       <Trynow/>

    </div>
        
  )
}

export default Usage
