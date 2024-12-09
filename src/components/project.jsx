import React from 'react';
import { PROJECTS } from '../constants'; 
import { motion } from "framer-motion";

function project() {
  return (
    <div className='border-b-2 border-neutral-900 pb-4' >
        <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{y:-80,opacity:0}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>

        <div>
            {PROJECTS.map((pro,ind) => (
                <div key={ind} className='mb-8 flex flex-wrap lg:justify-center' >
                    {/* <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{x:-100,opacity:0}}
                        transition={{duration:1.5}}
                        className='w-full lg:w-1/4' >
                        <img 
                            src={pro.image} 
                            width={150} 
                            height={150} 
                            className='mb-6 rounded' 
                            alt={pro.title} />
                    </motion.div> */}

                    <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{x:100,opacity:0}}
                        transition={{duration:1.5}}
                        className='w-full max-w-xl lg:w-3/4' >
                        <h6 className='mb-2 font-semibold' >{pro.title}</h6>
                        <p className='mb-4 text-neutral-400' >{pro.description}</p>
                        {pro.technologies.map((tech,ind) => (
                            <span key={ind} className='mb-0.5 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium ' >
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

export default project
