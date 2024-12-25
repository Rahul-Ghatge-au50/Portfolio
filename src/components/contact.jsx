import React from 'react';
import {CONTACT} from '../constants';
import { motion } from "framer-motion";

function contact() {
  return (
    <div className='border-b-2 border-neutral-900 pb-20' >
        <h1 className='my-10 text-center text-4xl  roboto-bold-italic' >Get In Touch</h1>
        <div className='text-center tracking-tighter' >
            <p className='my-4' >{CONTACT.address}</p>
            <p className='my-4' >{CONTACT.phoneNo}</p>
            <motion.div whileHover={{scale:1.2}}>
              <a href="#" className='border-b' >{CONTACT.email}</a>
            </motion.div>
        </div>
    </div>
  )
}

export default contact
