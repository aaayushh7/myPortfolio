import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub, IoLogoLinkedin, IoLogoTux, IoHardwareChipOutline, IoNuclearOutline, IoLogoAndroid, IoAtCircleOutline, IoFastFoodOutline, IoGitBranch, IoCodeSlash } from 'react-icons/io5'
import ayush from './Images/Ayush.jpg';
import website from './Images/foodilse.jpg';
import appl from './Images/Calc.jpg';
import anp from './Images/ANPR.jpg';
import disp from './Images/DisPred.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';
// swiper imports 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {

  const [isActive, setIsActive] = useState(false)
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
                className='p-4 w-275 bg-navBar rounded-lg fixed top-20 right-16 flex flex-col items-center justify-evenly gap-5'>
                <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Home</a>
                <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> About</a>
                <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Projects</a>
                <a href='#Contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}> Contact me</a>
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
                  loading='lazy' // Add the lazy loading attribute here
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
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="Nov'22"
                iconStyle={{ background: '#35a79c', color: '#fff' }}
                icon={<IoFastFoodOutline />}
              >
                <h3 className="vertical-timeline-element-title">WebDev</h3>
                <h4 className="vertical-timeline-element-subtitle">foodilse.in</h4>
                <p>
                  UI/UX, proficient in html,css,JS,ReactJS. Responsive webDesign principles and frameworks(Tailwind, Bootstrap), DBMS, control system(Git), Collaboration tool(Github)
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="Mar'23"
                iconStyle={{ background: '#f37736', color: '#fff' }}
                icon={<IoLogoAndroid />}
              >
                <h3 className="vertical-timeline-element-title">AppDev</h3>
                <h4 className="vertical-timeline-element-subtitle">Android Studio</h4>
                <p>
                  Worked with java,kotlin and xml to create an SGPA/CGPA calc. app to calculate SGPA/CGPA in seconds, optimised app performance and resposiveness
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="Dec'2022"
                iconStyle={{ background: '#4a4e4d', color: '#fff' }}
                icon={<IoNuclearOutline />}
              >
                <h3 className="vertical-timeline-element-title">Machine Learning</h3>
                <h4 className="vertical-timeline-element-subtitle">Anaconda, Jupyter</h4>
                <p>
                  Regression, Classification and clustering Algorithms, Familiar with Lib: TensorFlow, scikit-learn OpenCV -{'>'} Disaster Prediction, weather Prediction, Car NumberPlate Recognition system
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="apr'19 - feb'22"
                iconStyle={{ background: '#8874a3', color: '#fff' }}
                icon={<IoLogoTux />}
              >
                <h3 className="vertical-timeline-element-title">Linux</h3>
                <h4 className="vertical-timeline-element-subtitle">Ubuntu, Fedora</h4>
                <p>
                  Proficient in Linux OS, Package Management, Shell scripting, Proficient in linux utilities, Updated with linux developments through professional resources
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="Jun'23 - presents"
                iconStyle={{ background: '#aa6f73', color: '#fff' }}
                icon={<IoHardwareChipOutline />}
              >
                <h3 className="vertical-timeline-element-title">DSA</h3>
                <h4 className="vertical-timeline-element-subtitle">Coursera-Cpp</h4>
                <p>
                  Sorting, Searching, recursion, BFS, DFS, Binary Search, Algorithm analysis and optimisation
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="Apr'22-December'22"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeSlash />}
              >
                <h3 className="vertical-timeline-element-title">Java/C/Cpp/Python/JavaScript</h3>
                <h4 className="vertical-timeline-element-subtitle">Resources</h4>
                <p>
                  Object-Oriented, Algorithms, Databases, Libraries
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(25, 39, 52)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(136, 153, 166)' }}
                date="2023"
                iconStyle={{ background: 'rgb(244, 212, 124)', color: '#000000' }}
                icon={<IoGitBranch />}
              >
                <h3 className="vertical-timeline-element-title">Loading...</h3>
                <h4 className="vertical-timeline-element-subtitle">Enhancing Skills</h4>
                <p>
                  Actively acquiring proficiency in emerging technologies.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>


          {/*Project section*/}
          <section className='items-center justify-center gap-4 pt-11' id='projects'>
            <p className="w-full text-4xl text-center text-slate-300 font-bold pt-5 capitalize my-20 flex justify-center items-center pb-8">
              <b>few Projects</b>
            </p>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              // slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              breakpoints={{
                // When window width is <= 767px
                767: {
                  slidesPerView: 1,
                },
                // When window width is > 767px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className='pt-11 pb-11'><div className='border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
                <p className='text-lg text-textBase font-medium uppercase'>
                  E-commerce website
                </p>
                <LazyLoadImage
                  src={website}
                  alt=''
                  effect='blur' // Optional: Add blur effect while loading
                  className='w-full h-full object-cover rounded-md my-4'
                />
                <div className='flex flex-1 items-center justify-between'>
                  <p className='text-lg text-gray-200'>
                    Technologies
                    <span className='block text-sm text-gray-400'>
                      Html, Css, JavaScript
                    </span>
                  </p>
                  <a href='https://github.com/aaayushh7'>
                    <div>
                      <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                    </div>
                  </a>
                </div>
              </div></SwiperSlide>
              <SwiperSlide className='pt-11'><div className='border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
                <p className='text-lg text-textBase font-medium uppercase'>
                  SGPA/CGPA calculator
                </p>
                <LazyLoadImage
                  src={appl}
                  alt=''
                  effect='blur' // Optional: Add blur effect while loading
                  className='w-full h-full object-cover rounded-md my-4'
                />
                <div className='flex flex-1 items-center justify-between'>
                  <p className='text-lg text-gray-200'>
                    Technologies
                    <span className='block text-sm text-gray-400'>
                      xml, Java, Kotlin
                    </span>
                  </p>
                  <a href='https://github.com/aaayushh7/WebD-project'>
                    <div>
                      <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                    </div>
                  </a>
                </div>
              </div></SwiperSlide>
              <SwiperSlide className='pt-11'><div className='border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
                <p className='text-lg text-textBase font-medium uppercase'>
                  NumberPlate Detection
                </p>
                <LazyLoadImage
                  src={anp}
                  alt=''
                  effect='blur' // Optional: Add blur effect while loading
                  className='w-full h-full object-cover rounded-md my-4'
                />                <div className='flex flex-1 items-center justify-between'>
                  <p className='text-lg text-gray-200'>
                    Technologies
                    <span className='block text-sm text-gray-400'>
                      python and it's Libraries, Algorithm
                    </span>
                  </p>
                  <a href='https://github.com/aaayushh7'>
                    <div>
                      <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                    </div>
                  </a>
                </div>
              </div></SwiperSlide>
              <SwiperSlide className='pt-11'><div className='border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>

                <p className='text-lg text-textBase font-medium uppercase'>
                  Disaster Prediction
                </p>
                <LazyLoadImage
                  src={disp}
                  alt=''
                  effect='blur' // Optional: Add blur effect while loading
                  className='w-full h-full object-cover rounded-md my-4'
                />                <div className='flex flex-1 items-center justify-between'>
                  <p className='text-lg text-gray-200'>
                    Technologies
                    <span className='block text-sm text-gray-400'>
                      python and it's Libraries, Algorithm
                    </span>
                  </p>
                  <a href='https://github.com/aaayushh7/DisasterPrediction'>
                    <div>
                      <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                    </div>
                  </a>
                </div>
              </div></SwiperSlide>
              <SwiperSlide className='pt-11'>
                <div className='border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
                  <div className='flex flex-1 items-center justify-between'>
                    <p className='text-lg text-gray-200'>
                      More Projects
                      <span className='block text-sm text-gray-400'>
                        using GUI(Tkinter), ML, React etc
                      </span>
                    </p>
                    <a href='https://github.com/aaayushh7'>
                      <div>
                        <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>

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
