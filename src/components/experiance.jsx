import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from "framer-motion";

function experiance() {
  return (
    <div className='border-b-2 border-neutral-900 pb-4' >
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{y:-80,opacity:0}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl  roboto-bold-italic' >Experiance</motion.h1>
      
      <div>
        {EXPERIENCES.map((exp,ind) => (
            <div key={ind} className='mb-8 flex flex-wrap lg:justify-center' >
                <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{x:-100,opacity:0}}
                    transition={{duration:1.5}}
                    className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400' >{exp.year}</p>
                </motion.div>
                <motion.div 
                  whileInView={{opacity:1,x:0}}
                  initial={{x:100,opacity:0}}
                  transition={{duration:1.5}}
                  className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-3 font-semibold' >
                        {exp.role}
                        <p className='text-sm text-purple-200' >{exp.company}</p>
                    </h6>
                    <p className='mb-4 text-neutral-400' >{exp.description}</p>
                    {exp.technologies.map((tech,ind) => (
                        <span key={ind} className='mr-2 mt-4 rounded bg-neutral-900 px-2 pu-1 text-sm font-md text-purple-800' >
                        {tech}
                        </span>
                    ))}                
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default experiance
