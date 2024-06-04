import React from 'react'
import ScrollReveal from 'scrollreveal'
import {motion} from 'framer-motion' 
import './stats.css'

import { useRef,useEffect } from 'react'
// const Stats = () => {
//     const Dref = useRef(null)
//     const Cref = useRef(null)
//     const Bref = useRef(null)
//     useEffect(()=>{
//         ScrollReveal().reveal(Cref.current,{
//             origin: "top",
//             distance: "50px",
//             duration: 1000
//         })
//         ScrollReveal().reveal(Bref.current,{
//             origin:"bottom",
//             distance:"100px",
//             duration:5000
//         })
//         ScrollReveal().reveal(Dref.current,{
//             origin: "bottom",
//             distance: "100px",
//             scale:.5,
//             duration:1000
//         })
//     },[])
//   return (
//     <>
//     <div id='whyus' className='stats'>
//         <div className="stat_container">
//             <div ref={Cref} className='stat_heading my-6'>
//                 <h2 className='text-center text-5xl font-semibold mb-10'>Why PNEUMO.AI?</h2>
//                 <div>
//                     <p className='text-xl mb-4 text-indigo-900'>Pneumo.ai uses CNN and Deep Learning for disease prediction, which produces accurate results.</p>
//                 </div>
//             </div>

//             <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center mt-8 lg:grid-cols-3'>
//                 <div ref={Dref} className="rounded-2xl px-16 py-10 bg-white stats_box mx-auto flex max-w-xs flex-col gap-y-4">
//                     <div className="text-base leading-7 text-gray-600">More accurate results</div>
//                     <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">90% </div>
//                 </div>
//                 <div ref={Dref} className="rounded-2xl bg-white px-16 py-10  stats_box mx-auto flex max-w-xs flex-col gap-y-4">
//                     <div className="text-base leading-7 text-gray-600">by Students from CMR</div>
//                     <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">Project</div>
//                 </div>
//                 <div ref={Dref} className="rounded-2xl bg-white px-16 py-10 stats_box mx-auto flex max-w-xs flex-col gap-y-4">
//                     <div className="text-base leading-7 text-gray-600">New users monthly</div>
//                     <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">1000+</div>
//                 </div>
//             </div>
//         </div>
//         <div ref={Bref} className="mt-16 z-40">
//             <a href='https://en.wikipedia.com/wiki/pneumonia' target='_blank' className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
//                 Read More &rarr;
//             </a>
//         </div>
//     </div>
//     </>
//   )
// }
const Stats = () => {
    const Cref = useRef(null);
    const Dref1 = useRef(null);
    const Dref2 = useRef(null);
    const Dref3 = useRef(null);
    const Bref = useRef(null);

    useEffect(() => {
        ScrollReveal().reveal(Cref.current,{
            origin: "top",
            distance: "50px",
            duration: 1000,
            opacity:0
        });
        ScrollReveal().reveal(Bref.current,{
            origin:"bottom",
            distance:"100px",
            opacity:0,
            duration:750
        });
        ScrollReveal().reveal(Dref1.current,{
            origin: "bottom",
            distance: "100px",
            scale: 0.5,
            duration: 1000
        });
        ScrollReveal().reveal(Dref2.current,{
            origin: "bottom",
            distance: "100px",
            scale: 0.5,
            duration: 1000
        });
        ScrollReveal().reveal(Dref3.current,{
            origin: "bottom",
            distance: "100px",
            scale: 0.5,
            duration: 1000
        });
    }, []);

    return (
        <>
            <div id='whyus' className='stats'>
                <div className="stat_container">
                    <div ref={Cref} className='stat_heading my-6'>
                        <h2 className='text-center text-5xl font-semibold mb-10'>Why PNEUMO.AI?</h2>
                        <div>
                            <p className='text-xl mb-4 text-indigo-900'>Pneumo.ai uses CNN and Deep Learning for disease prediction, which produces accurate results.</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-x-8 gap-y-16 text-center mt-8 lg:grid-cols-3'>
                        <div ref={Dref1} className="rounded-2xl px-16 py-10 bg-white stats_box mx-auto flex max-w-xs flex-col gap-y-4">
                            <div className="text-base leading-7 text-gray-600">More accurate results</div>
                            <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">90% </div>
                        </div>
                        <div ref={Dref2} className="rounded-2xl bg-white px-16 py-10  stats_box mx-auto flex max-w-xs flex-col gap-y-4">
                            <div className="text-base leading-7 text-gray-600">by Students from CMR</div>
                            <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">Project</div>
                        </div>
                        <div ref={Dref3} className="rounded-2xl bg-white px-16 py-10 stats_box mx-auto flex max-w-xs flex-col gap-y-4">
                            <div className="text-base leading-7 text-gray-600">New users monthly</div>
                            <div className="order-first text-3xl font-semibold tracking-tight text-indigo-600 sm:text-5xl">1000+</div>
                        </div>
                    </div>
                </div>
                <div ref={Bref} className="mt-16 z-40">
                    <a href='https://en.wikipedia.com/wiki/pneumonia' target='_blank' className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                        Read More &rarr;
                    </a>
                </div>
            </div>
        </>
    );
};

export default Stats;
