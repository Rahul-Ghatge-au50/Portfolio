import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import Java from '../assets/java.png';
import { motion } from "framer-motion";

const icon = (duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

function techno() {
  return (
    <div className='border-b-2 border-neutral-800 pb-24' >
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-80,opacity:0}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl' >
            Technologies
        </motion.h1>

        <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4' >
            <motion.div 
                variants={icon(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-3' >
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div
                variants={icon(3)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-3' >
                <FaNode className='text-7xl text-green-500' />
            </motion.div>
            <motion.div 
                variants={icon(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-3' >
                <BiLogoMongodb className='text-7xl text-green-400' />
            </motion.div>
            <motion.div 
                variants={icon(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-3' >
                <DiMysql className='text-7xl text-sky-500' />
            </motion.div>
            <motion.div 
                variants={icon(6)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-3' >
                <TbBrandJavascript className='text-7xl text-cyan-400 '  />
            </motion.div>
            {/* <motion.div 
                variants={icon(7)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4' >
                <img src={Java} alt="" className='w-16' />
            </motion.div> */}
        </motion.div>
    </div>
  )
}

export default techno
