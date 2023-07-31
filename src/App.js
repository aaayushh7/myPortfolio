import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub, IoLogoLinkedin,  IoAtCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5'
import ayush from './Images/Ayush.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { Experience } from './data';
import Project from './proect';



function App() {

  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadResume = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

    }, 3000);
  };
  return (

    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/*Navigation bar*/}
        <nav className='w-full px-6 z-50 fixed inset-x-0  top-2 flex justify-center items-center'>
          <div className='w-full p-4 md:w-880 bg-navBar rounded-2xl flex items-center'>
            <p className='text-lg text-slate-200 cursor-pointer'><b>Ayush Tiwari</b></p>
            <div className='hidden md:flex items-center gap-9 ml-12 flex-1'>
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Home</a>
              <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> About</a>
              <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Projects</a>
              <a href='#Contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'> Contact me</a>
              <button
                onClick={handleDownloadResume}
                className="ml-auto text-base text-slate-300 font-medium hover:text-slate-100 cursor-pointer duration-500 ease-in-out hover:bg-icodow shadow-sm hover:shadow-shadowlue flex items-center gap-2 px-3 py-1 rounded-3xl border border-icodow"
              >
                <a href='https://drive.google.com/uc?export=download&id=1iwnBKJoSq0-9-CUg5oJqGBXR6IcOPRs8' className="flex items-center gap-2">
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
            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.1, type: 'tween' }}
                className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-10 flex flex-col items-center justify-evenly gap-5'>
                <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Home</a>
                <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> About</a>
                <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Projects</a>
                <a href='#Contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Contact me</a>
                <button
                  onClick={handleDownloadResume}
                  className="text-base text-slate-300 font-medium hover:text-slate-100 cursor-pointer duration-500 ease-in-out hover:bg-icodow shadow-sm hover:shadow-shadowlue flex items-center gap-2 px-3 py-1 rounded-3xl border border-icodow"
                >
                  <a href='https://drive.google.com/uc?export=download&id=1iwnBKJoSq0-9-CUg5oJqGBXR6IcOPRs8' className="flex items-center gap-2">
                    <IoArrowDownCircleOutline className="h-6 w-6" />
                    <span>Resume</span>
                  </a>
                  {isLoading && (
                    <div className="border-t-4 border-te animate-spin rounded-full h-6 w-6 ml-2" />
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </nav>
        <div className="relative h-screen w-full" id="home">
          <Spline scene="https://prod.spline.design/2XATKb6a1CPylYeF/scene.splinecode" />
          <div className='absolute bottom-5 w-full justify-center items-center flex'>
            <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl cursor-pointer'>
              <IoAtCircleOutline className='text-md text-textBase'>
              </IoAtCircleOutline>
              <p className='text-md text-textBase'>ayushtiwari.co</p>
            </div>
          </div>
        </div>
        {/*Main section */}
        <main className='w-[80%] mt-11'>
          {/*about section*/}
          <section className='w-full grid grid-cols-1 pt-7 md:grid-cols-2 gap-4 my-24' id='about'>
            {/* Image box */}
            <div className='w-full h-440 pb-6 pt-11 flex items-center justify-center'>
              <div className='w-200 h-200 md:h-300 md:w-300 bg-gradient-to-b from-fuchsia-500 via-red-600 to-orange-400 rounded-full relative'>
                <img
                  src={ayush}
                  alt=''
                  loading='lazy'
                  className='w-full h-full absolute -right-4 top-4 object-cover rounded-full shadow-lg'
                />
              </div>
            </div>
            {/*Content box */}
            <div className='w-full h-490 flex flex-col items-center justify-center'>
              <p className='text-lg text-textBase text-center'>
                I am a passionate individual with a deep love for exploring new horizons. Traveling has been a significant source of inspiration for me, broadening my perspective and nurturing a sense of adventure. Alongside, my insatiable curiosity has led me to dive into the ever-evolving world of technology, where I constantly strive to learn and keep up with the latest advancements. Building ecosystems that foster innovation and connectivity is a personal mission, as I believe in the transformative power of interconnectedness. When not engrossed in the realm of technology, you can find me strumming my guitar, indulging in music, or designing captivating websites. With a clear aim to specialize in connectivity, I am determined to contribute my expertise to the ever-expanding field of technology.
              </p>
            </div>
          </section>

          {/*Timeline Section*/}
          <section className='w-full flex items-center justify-center'>
            <VerticalTimeline>
              {
                Experience && Experience.map(n => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                    date={n.date}
                    iconStyle={{ background: '#35a79c', color: '#fff' }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">{n.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
            </section>


            {/*Project section*/}
            <Project />
            {/* contact section  */}
            <section id='Contact' className='flex flex-col items-center justify-center w-full my-24'>
              <p className='text-2xl text-gray-300 capitalize'> <b>Contact me</b> </p>
              {/* linkedin  */}
              <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href='https://www.linkedin.com/in/ayush-tiwari-538ab824b/' className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                  <IoLogoLinkedin className='text-blue-700 text-3xl cursor-pointer' />
                  <p className='text-lg text-textBase'>Linkedin</p>
                </motion.a>
              </div>
              {/* github */}
              <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href='https://github.com/aaayushh7' className='w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                  <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                  <p className='text-lg text-textBase'>Github</p>
                </motion.a>
              </div>
            </section>
        </main>
      </div>
    </AnimatePresence>

  );
}

export default App;