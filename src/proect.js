
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import website from './Images/foodilse.jpg';
import appl from './Images/Calc.jpg';
import anp from './Images/ANPR.jpg';
import disp from './Images/DisPred.jpg';
import can from './Images/can.png';
import more from './Images/gola.png'
import git  from './Images/more.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoLogoGithub } from 'react-icons/io5';


const Project = () => {
  return (
    <section className='items-center justify-center gap-4 pt-11' id='projects'>
      <p className="w-full text-4xl text-center text-slate-300 font-bold pt-5 capitalize my-20 flex justify-center items-center pb-8">
        <b>few Projects</b>
      </p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        breakpoints={{
          // When window width is <= 767px
          767: {
            slidesPerView: 1,
          },
          // When window width is > 767px
          768: {
            slidesPerView: 6,
          },
        }}
        coverflowEffect={{
          rotate: 0, // Adjust the rotation angle
          stretch: 10, // Adjust the stretch effect
          depth: 120, // Adjust the depth effect
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='pt-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>

          <p className='text-lg text-textBase font-medium uppercase'>
            Go Tools for developers
          </p>
          <LazyLoadImage
            src={more}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4'
          />                <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technology
              <span className='block text-sm text-gray-400'>
               GoLang
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>
        <SwiperSlide className='pt-11 pb-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out '>
          <p className='text-lg text-textBase font-medium uppercase'>
            E-commerce for Hostelers
          </p>
          <LazyLoadImage
            src={website}
            alt=''
            effect='opacity'
            className='w-full h-full object-cover rounded-md my-4'
          />
          <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                JavaScript
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>
        <SwiperSlide className='pt-11'><div className='backdrop-blur-xl border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
          <p className='text-lg text-textBase font-medium uppercase'>
            WomenSafety app
          </p>
          <LazyLoadImage
            src={appl}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4'
          />
          <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                xml, Java, Kotlin
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
        <SwiperSlide className='pt-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
          <p className='text-lg text-textBase font-medium uppercase'>
            NumberPlate Detection
          </p>
          <LazyLoadImage
            src={anp}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4' />
          <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                OpenCV
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>
        <SwiperSlide className='pt-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>

          <p className='text-lg text-textBase font-medium uppercase'>
            Disaster Prediction
          </p>
          <LazyLoadImage
            src={disp}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4'
          />                <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                skLearn
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>
        <SwiperSlide className='pt-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>

          <p className='text-lg text-textBase font-medium uppercase'>
            Cancer Detection
          </p>
          <LazyLoadImage
            src={can}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4'
          />                <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                Flask Deployment
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>
        <SwiperSlide className='pt-11'><div className=' backdrop-blur-xl  border cursor-pointer border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>

          <p className='text-lg text-textBase font-medium uppercase'>
            More Projects
          </p>
          <LazyLoadImage
            src={git}
            alt=''
            effect='opacity' // Optional: Add blur effect while loading
            className='w-full h-full object-cover rounded-md my-4'
          />                <div className='flex flex-1 items-center justify-between'>
            <p className='text-lg text-gray-200'>
              Technologies
              <span className='block text-sm text-gray-400'>
                Express, flask, sheri.js etc.
              </span>
            </p>
            <a href='https://github.com/aaayushh7'>
              <div>
                <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />
              </div>
            </a>
          </div>
        </div></SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper>
    </section>
  );
};

export default Project;
