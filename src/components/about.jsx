import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

function about() {
  return (
    <div className='border-b-2 border-neutral-900 pb-4' >
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-80,opacity:0}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl roboto-bold-italic' >
            About 
            <span className='text-neutral-500' > Me </span>
        </motion.h1>

        <div className='flex flex-wrap' >
            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}
                transition={{duration:0.5}}
                className='w-full lg:w-1/2 lg:p-8' >
                <div className='flex items-center justify-center' >
                    <img src={aboutImg} className='rounded-2xl w-3/4 lg:w-4/5'  alt="about" />
                </div>
            </motion.div>

            <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{x:100, opacity:0}}
                transition={{duration:0.5,delay:0.5}}
                className='w-full lg:w-1/2' >
                    <div className='flex justify-center lg:justify-start' >
                        <p className='my-2 max-w-xl py-6' >{ABOUT_TEXT}</p>
                    </div>
            </motion.div>
        </div>
    </div>
  )
}

export default about
