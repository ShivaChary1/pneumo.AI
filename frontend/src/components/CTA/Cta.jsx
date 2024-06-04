import Respiratory from "../../assets/Pneumonia.json"
import ScrollReveal from 'scrollreveal'
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react"
import { useRef,useEffect } from "react"
export default function Example() {
  const ref = useRef(null)
  useEffect(()=>{
    ScrollReveal().reveal(ref.current,{
      origin:"bottom",
      distance:"100px",
      opacity:0,
      duration:1500
    })
  })
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div ref={ref} className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
            <div className="min-w-lg mr-50  flex-auto py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">
                Every Breath Matters!
                <br />
                Detect Pneumonia Early, Save Lives
              </h2>
              <p className="mt-6 w-80 text-lg leading-8 text-gray-800">
                Using AI, our app swiftly detects pneumonia from X-rays, saving lives by enabling early treatment</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <NavLink
                  to="/trynow"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Try Now
                </NavLink>
              </div>
            </div>
            <div className="mr-0">
            <Lottie
              className="absolute mt-12 ml-60 pl-60 left-20 top-0"
              animationData={Respiratory}
            />
            </div>
          </div>
        </div>
      </div>
    )
  }
  