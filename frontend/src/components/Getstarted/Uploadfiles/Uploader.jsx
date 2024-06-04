import React from 'react'
import './uploader.css'
import { useState,useRef,useEffect } from 'react'
import { MdDelete } from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
import {motion, spring} from 'framer-motion'
import Lottie from 'lottie-react'
import uploadsvg from '../../../assets/uploadimg.json'

const Uploader = () => {
    
    const [image,setImage] = useState(null)
    const [file,setFile] = useState("No file uploaded")
  return (
    <>
    <motion.div initial={{y:"90px",opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"ease-in"}} className='main_div'>
    <h1 className='text-2xl h1_h1 font-bold text-indigo-600'>Upload an Image</h1>
        
        <form action="">
        <div onClick={()=>document.querySelector(".img-upload").click()} className='form_box' >
            <input hidden type="file" name="file"className='img-upload' accept='image/*' id=""
            onChange={({target:{files}})=>{
                files[0] && setFile(files[0].name)
                if(files){
                    setImage(URL.createObjectURL(files[0]))
                }

            }} />
        {image?
        <img src={image} width={150} height={150} alt={file}/>
        :
        <>
        <Lottie animationData={uploadsvg} className='h-36' />
        <p className='mt-4'>
        Click to upload a file</p>
        </>
    }
     </div>
        </form>
       
        
        <section className='uploaded_row' >
            <AiFillFileImage color='#000000'/>
                {file}{"  "}
                <MdDelete
                onClick={()=>{
                    setFile("No file uploaded")
                    setImage(null)
                }}/>
        </section>
    </motion.div>
    </>
  )
}

export default Uploader
