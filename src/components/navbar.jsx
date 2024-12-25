import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import naukriLogo from '../assets/download.png';
import naukri from "../assets/projects/specialization.png";
import { color } from "framer-motion";


function navbar () {
    return (    
        <>
            <nav className="mb-10 flex items-center justify-between py-6 text-white	">
                <div className="flex items-center" >
                    Rahul Ghatge
                </div>
                <div className="flex items-center justify-center gap-3 text-2xl">
                    <a href="https://www.linkedin.com/in/rahul-ghatge-b10814214/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>                
                    <a href="https://github.com/Rahul-Ghatge-au50"  target="_blank" rel="noopener noreferrer" ><FaGithub/></a>
                    <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
                        <img 
                            src={naukri}  
                            width={24} 
                            height={24} 
                            className="bg-white"  
                            alt="" 
                        />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default navbar;