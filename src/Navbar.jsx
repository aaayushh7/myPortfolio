import { IoMenu, IoArrowDownCircleOutline } from 'react-icons/io5'
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import {Link} from "react-scroll";


const Navbar = React.memo(() => {

    const [isActive, setIsActive] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleDownloadResume = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

        }, 3000);
    };
    return (
        <AnimatePresence>
            <nav className='w-full px-6 z-50 fixed inset-x-0  top-2 flex justify-center items-center'>
                <div className='w-full p-4 md:w-880 bg-navBar bg-opacity-50 backdrop-blur-lg rounded-2xl flex items-center'>
                    <p className='text-lg text-slate-200 cursor-pointer'><b>Ayush Tiwari</b></p>
                    <div className='hidden md:flex items-center gap-9 ml-12 flex-1'>
                        <Link to="home" spy={true} smooth={true} offset={50} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> About</Link>
                        <Link to="timeline" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Timeline</Link>
                        <Link to="projects" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Projects</Link>
                        <Link to="Contact" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Contact me</Link>
                        <button
                            onClick={handleDownloadResume}
                            className="ml-auto text-base text-slate-300 font-medium hover:text-slate-100 cursor-pointer duration-500 ease-in-out hover:bg-icodow shadow-sm hover:shadow-shadowlue flex items-center gap-2 px-3 py-1 rounded-3xl border border-icodow"
                        >
                            <a href='https://drive.google.com/uc?export=download&id=1_cwvSpfDsWjm6ooX9T2EO99zgeigaLrf' className="flex items-center gap-2">
                                <IoArrowDownCircleOutline className="h-6 w-6" />
                                <span>Resume</span>
                            </a>
                            {isLoading && (
                                <div className="border-t-4 border-te animate-spin rounded-full h-6 w-6 ml-2" />
                            )}
                        </button>
                    </div>

                    <motion.div
                        whileTap={{ scale: 0.7 }}
                        className='block md:hidden ml-auto cursor-pointer' onClick={() => setIsActive(!isActive)}>
                        <IoMenu className='text-2xl text-textBase cursor-pointer' />
                    </motion.div>
                    
                    <AnimatePresence>
                    {isActive && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.3 }}
                            transition={{ delay: 0.1, type: 'spring' }}
                            className='p-4 w-275 bg-navBar bg-opacity-80 backdrop-blur-md drop-shadow-lg rounded-lg fixed top-24 right-10 flex flex-col items-center justify-evenly gap-5'>
                            <Link to="home" spy={true} smooth={true} offset={50} duration={2000} className='text-base  text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Home</Link>
                            <Link to="about" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> About</Link>
                            <Link to="timeline" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Timeline</Link>
                            <Link to="projects" spy={true} smooth={true} offset={0} duration={1500} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Projects</Link>
                            <Link to="Contact" spy={true} smooth={true} offset={0} duration={1000} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Contact me</Link>
                            <button
                                onClick={handleDownloadResume}
                                className="text-base text-slate-300 font-medium hover:text-slate-100 cursor-pointer duration-500 ease-in-out hover:bg-icodow shadow-sm hover:shadow-shadowlue flex items-center gap-2 px-3 py-1 rounded-3xl border border-icodow"
                            >
                                <a href='https://drive.google.com/uc?export=download&id=1_cwvSpfDsWjm6ooX9T2EO99zgeigaLrf' className="flex items-center gap-2">
                                    <IoArrowDownCircleOutline className="h-6 w-6" />
                                    <span>Resume</span>
                                </a>
                                {isLoading && (
                                    <div className="border-t-4 border-te animate-spin rounded-full h-6 w-6 ml-2" />
                                )}
                            </button>
                        </motion.div>
                       
                    )}
                    </AnimatePresence>
                </div>
            </nav>
        </AnimatePresence>
        
    );

});


export default React.memo(Navbar);
