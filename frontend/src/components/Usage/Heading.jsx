import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { motion } from 'framer-motion'
import '../header/navbar.css'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Get started', description: 'upload chest X-rays to predict pneumonia', href: '#', icon: ChartPieIcon },
  { name: 'How to Use?', description: 'See how to use pneumo.ai', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Your Account', description: 'See your profile', href: '#', icon: SquaresPlusIcon },
  { name: 'Emergency', description: 'Consult reffered emergencies', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact support', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Heading = () => {
    let [mobileMenuOpen,setMobileMenuOpen] = useState(false)
  return (
    <>
    <motion.header initial={{y:"-100px"}} animate={{y:0}} transition={{duration:1.5,type:"spring",mass:.8}} className="absolute inset-x-0 top-0 z-40" >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">pneumo.ai</span>
            <img className="h-8 w-auto" src={logo} alt="pneumo.ai" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/trynow" className="nav-login rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            TRY NOW
          </NavLink>
        </div>
      </nav>
    </motion.header>
    <motion.h1 initial={{y:"-100px",opacity:0}} animate={{y:0,opacity:1}} transition={{
      duration:1.5,
      type: "spring",
      mass: .8
    }} id='step1' className="text-center mt-32 text-indigo-600 text-5xl font-bold"> How to use our app? </motion.h1>
    </>
  )
}

export default Heading
