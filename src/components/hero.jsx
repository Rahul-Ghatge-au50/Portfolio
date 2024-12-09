import React from 'react';
import {HERO_CONTENT} from '../constants';
// import profile_img from "../assets/kevinRushProfile.png";
import Profile_img from "../assets/IMG_9105.JPG"
import { motion } from "framer-motion";


function hero() {
  return (
    <div>
      <div className='border-b-2 border-neutral-900 pb-4 lg:mb-35 ' >
        <div className='flex flex-wrap' >
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start' >
                    <motion.h1
                      whileInView={{x:0,opacity:1}}  
                      initial={{x:-100,opacity:0}}
                      transition={{duration:0.5,delay:0}}
                      className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"  >
                        Rahul Ghatge
                    </motion.h1>
                    <motion.span 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}} 
                        transition={{duration:0.5,delay:0.5}}
                       className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl
                        tracking-tight text-transparent' >
                        Full Stack Developer
                    </motion.span>
                    <motion.p
                      initial={{x:-100,opacity:0}}
                      whileInView={{x:0,opacity:1}} 
                      transition={{duration:0.5,delay:1}} 
                       className='my-2 max-w-xl py-6 font-light tracking-tighter' >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:p-8' >
                <motion.div
                      initial={{x:100,opacity:0}}
                      whileInView={{x:0,opacity:1}} 
                      transition={{duration:0.5,delay:1.5}}
                   className='flex justify-center'>
                    <img src={Profile_img} className='w-3/4 lg:w-4/5 rounded-md' alt="Rahul Ghatge"/>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default hero
