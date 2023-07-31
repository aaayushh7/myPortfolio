import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import website from './Images/foodilse.jpg';
import appl from './Images/Calc.jpg';
import anp from './Images/ANPR.jpg';
import disp from './Images/DisPred.jpg';
import 'swiper/css/scrollbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {IoLogoGithub} from 'react-icons/io5';

const Project = () => {
  return (
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
                    effect='blur'
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
                </div>
                </SwiperSlide>
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
  );
};

export default Project;
