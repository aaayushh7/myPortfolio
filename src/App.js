import Spline from '@splinetool/react-spline';
import { IoLogoGithub, IoLogoLinkedin, IoAtCircleOutline } from 'react-icons/io5'
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';
import Project from './proect';
import About from './about';
import Navbar from './Navbar';
import TimeLin from './time';

function App() {

  return (

    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        {/*Navigation bar*/}
        <Navbar />
        {/* 3d models  */}
        <div className="relative h-screen w-[99%]" id='home'>
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
          <About />
          {/*Timeline Section*/}
          <TimeLin />

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
