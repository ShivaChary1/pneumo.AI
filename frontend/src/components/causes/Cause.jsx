import './cause.css'
import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react'
import bact from '../../assets/bacteria.json'
import vill from '../../assets/viralinfection.json'
import ScrollReveal from 'scrollreveal'
import imune from '../../assets/immune.json'
import envi from '../../assets/environ.json'
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Cause() {
  const bref = useRef(null)
  const Cref = useRef(null)
  const ref = useRef(null);
  useEffect(()=>{
    ScrollReveal().reveal(Cref.current,{
      origin: "top",
      distance: "50px",
      duration: 1000,
      opacity:0
  });
    ScrollReveal().reveal(bref.current,{
      origin:"bottom",
      distance:"25px",
      duration:250,
      opacity: 0
    })
  },[])
  const [windowHeight, setWindowHeight] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, windowHeight]);
  const y2 = useTransform(scrollYProgress, [0, 1], [windowHeight ,0 ]);
  return (
    <div className="bg-white">
      <div className="relative isolate ">
        <div
          className="absolute addu  transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='min-h-10'></div>

        <h1 id="causes" ref={Cref} className="text-center text-5xl font-semibold mt-10 mb-16" >Causes</h1>
        <div ref={ref} className="cardContainer py-8">
          <motion.div className="cardHorizontal first" style={{x:y}}>
            <div className='imgMove'>
              <Lottie className='bact_lot' animationData={bact} />
              {/* <h2 className='text-indigo-600 text-center mt-2 text-xl font-medium'>Bacterial Infection</h2> */}
            </div>
            <div className='imgMove bg-indigo-600'>
            <h2 className='text-white text-center my-4 text-2xl font-medium'>Bacterial Infection</h2>
            <p className='text-white text-center my-1 px-3 text-l'>Pneumonia often stems from bacteria like Streptococcus pneumoniae, Haemophilus influenzae, or Mycoplasma pneumoniae, causing lung inflammation</p>
            </div>
            <div className='imgMove'>
              <Lottie className='bact_lot' animationData={vill}/>
            </div>
            <div className='imgMove bg-indigo-600'>
            <h2 className='text-white text-center my-4 text-2xl font-medium'>Viral Infection</h2>
            <p className='text-white text-center my-1 px-3 text-l'>Influenza, respiratory syncytial virus (RSV), and adenovirus can trigger viral pneumonia, especially in vulnerable populations</p>

            </div>

          </motion.div>
          
          <motion.div className="cardHorizontal second" style={{x:y2}}>
            <div className='imgMove bg-indigo-600'>
            <h2 className='text-white text-center my-4 text-2xl font-medium'>Low Immunity</h2>
            <p className='text-white text-center my-1 px-3 text-l'>Pneumonia can occur due to a weakened immune system, making individuals more susceptible to infections from various pathogens</p>

            </div>
            <div className='imgMove'>
              <Lottie className='bact_lot' animationData={imune}/>
            </div>
            <div className='imgMove bg-indigo-600'>
            <h2 className='text-white text-center my-4 text-2xl font-medium'>Environment Factors</h2>
            <p className='text-white text-center my-1 px-3 text-l'>Inhalation of environmental pollutants, such as air pollution or allergens, can contribute to lung inflammation and pneumonia</p>
            </div>
            <div className='imgMove'>
              <Lottie className='bact_lot' animationData={envi}/>
            </div>

          </motion.div>
        </div>
        <div ref={bref} className='more overflow-y-hidden'>
          <a className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' target='_blank' href="https://en.wikipedia.com/wiki/pneumonia">
            Know more causes ? &rarr;
          </a>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>



  )
}
