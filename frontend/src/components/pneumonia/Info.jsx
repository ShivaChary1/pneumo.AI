import { motion } from "framer-motion";
import Lottie from 'lottie-react'
import { useRef,useEffect } from "react";
import ScrollReveal from "scrollreveal";
import './info.css';
import cdata from '../../assets/cough.json'
import hdata from '../../assets/heartbeat.json'
import bdata from '../../assets/breathing.json'
import odata from '../../assets/others.json'
import vdata from '../../assets/vomit.json'
import pdata from '../../assets/chestpain.json'
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Info() {
  const Cref = useRef(null)
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(Cref.current,{
        origin: "top",
        distance: "50px",
        duration: 1000,
        opacity:0
    });
    ScrollReveal().reveal(ref1.current,{
      opacity: 0, scale: 0, 
      origin: "bottom", 
      distance: "50px",
      duration: 1500
  });
  ScrollReveal().reveal(ref2.current,{
    opacity: 0, scale: 0, origin: "bottom", distance: "50px",
    duration: 1500
});
ScrollReveal().reveal(ref3.current,{
  opacity: 0, scale: 0, origin: "bottom", distance: "50px",
  duration: 1500
});
ScrollReveal().reveal(ref4.current,{
  opacity: 0, scale: 0, origin: "bottom", distance: "50px",
  duration: 1500
});
ScrollReveal().reveal(ref5.current,{
  opacity: 0, scale: 0, origin: "bottom", distance: "50px",
  duration: 1500
});
ScrollReveal().reveal(ref6.current,{
  
  opacity: 0, scale: 0, origin: "bottom", distance: "50px",
  duration: 1500
});
  },[]);



  let [isOpen, setIsOpen] = useState(1);

  return (
    <div className="bg-white">
      <div className="relative isolate pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

        
      <h1 ref={Cref} id="pneumonia" className="text-center text-5xl font-semibold mb-10" >Symptoms</h1>
      <div  className="py-8 px-2 app z-40">
        <div ref={ref1}>
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Persistent Cough
            {isOpen===1?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===1?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={() => setIsOpen(1)}>View &rarr;</button>
          {isOpen === 1 &&
            <motion.div className="expand">
              
              <div className="div2">
                <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
                A persistent cough that may produce phlegm (mucus) that can be clear, yellow, green, or bloody. The cough may worsen over time and can be accompanied by chest pain or discomfort.
                </p>
              </div>
              <div className="div1">
                <Lottie animationData={cdata}/>
              </div>
            </motion.div>
          }
        </motion.div>
        </div>
        
        <div ref={ref2}>
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Rapid Heart Rate
            {isOpen===3?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===3?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={() => setIsOpen(3)}>View &rarr;</button>
          {isOpen === 3 &&
            <motion.div className="expand gap-x-6">
              <div className="w-6/12">
                <Lottie animationData={hdata} />
              </div>
              <div className="w-5/12">
                <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
                In some cases, pneumonia can lead to an increased heart rate (tachycardia). The heart may beat faster to compensate for decreased oxygen levels in the blood.
                </p>

              </div>
            </motion.div>
          }
        </motion.div>
        </div>
        
        <div ref={ref3}>
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Shortness of Breath
            {isOpen===2?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===2?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}onClick={() => setIsOpen(2)}>View &rarr;</button>
          {isOpen === 2 &&
            <motion.div className="expand">
              <div className="div2">
               <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
               Difficulty breathing or shortness of breath, especially during physical activity or when lying down, is a common symptom of pneumonia. It may be accompanied by rapid breathing or shallow breathing.
               </p>
              </div>
              <div className="div1">
                <Lottie animationData={bdata}/>
              </div>
              
            </motion.div>
          }
        </motion.div>
        </div>
        
        <div ref={ref4}>
        <motion.div transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Chest Pain &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            {isOpen===4?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===4?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={() => setIsOpen(4)}>View &rarr;</button>
          {isOpen === 4 &&
            <motion.div className="expand">
              <div className="div1">
                <Lottie animationData={pdata}/>
              </div>
              <div className="div2">
              <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
                Chest pain that worsens when breathing deeply or coughing is another symptom of pneumonia. The pain may be sharp or dull and may be felt in one or both sides of the chest.
                </p>
              </div>
            </motion.div>
          }
        </motion.div>
        </div>
        
        <div ref={ref5}>
        <motion.div  transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 z-40 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Nausea or Vomitting
            {isOpen===5?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===5?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={() => setIsOpen(5)}>View &rarr;</button>
          {isOpen === 5 &&
            <motion.div className="expand">
              <div className="div2">
              <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
              Some individuals with pneumonia may experience nausea and vomiting, particularly if the infection is severe or if they have a high fever.
                </p>
              </div>
              <div className="div1">
              <Lottie animationData={vdata}/>
              </div>
              
            </motion.div>
          }
        </motion.div>
        </div>
        
        <div ref={ref6}>
        <motion.div  transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem" }} layout className="mr-2 z-40 card">
          <motion.h2 layout='position' className="card_title text-indigo-600 font-medium text-2xl font-medium">
            Other &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
            {isOpen===6?
            <button onClick={() => setIsOpen(0)} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><XMarkIcon className="h-5 w-5 font-semibold"/></button>:""}
          </motion.h2>
          <button className={isOpen===6?"hidden rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"} onClick={() => setIsOpen(6)}>View &rarr;</button>
          {isOpen === 6 &&
            <motion.div className="expand gap-x-6">
              <div className="div1">
              <Lottie animationData={odata}/>
              </div>
              <div className="w-5/12">
                <p className="text-white bg-indigo-600 p-4 rounded-md mt-2 font-medium text-md">
                It's important to remember that symptoms can vary from person to person and depend on factors such as the underlying cause of pneumonia, the individual's overall health, and the severity of the infection.
                </p>
              </div>
            </motion.div>
          }
        </motion.div>
        </div>


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
  );
}
