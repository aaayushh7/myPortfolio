import React, { Suspense } from 'react';
import { IoAtCircleOutline } from 'react-icons/io5';

import './index.css';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineScene() {
  
  return (
    <section className="relative h-screen w-[99%]" id='home'>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/1qS3P54MJSoxiqwO/scene.splinecode" />
      </Suspense>

      <div className='absolute bottom-5 w-full justify-center items-center flex'>
        <div className='shadow-md p-4 flex items-center justify-center bg-[#5f80ea] rounded-3xl cursor-pointer'>
          <IoAtCircleOutline className='text-md text-[#fff]'></IoAtCircleOutline>
          <p className='text-md text-[#fff]'>ayushtiwari.co</p>
        </div>
      </div>
    </section>
  );
}

// previous code ...

// import React from 'react'
// import Spline from '@splinetool/react-spline';
// import {  IoAtCircleOutline } from 'react-icons/io5'


// export default function spline() {
//   return (
//     <div className="relative h-screen w-[99%]" id='home'>
//           <Spline scene="https://prod.spline.design/2XATKb6a1CPylYeF/scene.splinecode" />
//           <div className='absolute bottom-5 w-full justify-center items-center flex'>
//             <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl cursor-pointer'>
//               <IoAtCircleOutline className='text-md text-textBase'>
//               </IoAtCircleOutline>
//               <p className='text-md text-textBase'>ayushtiwari.co</p>
//             </div>
//           </div>
//         </div>
//   )
// }
