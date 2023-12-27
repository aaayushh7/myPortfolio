import React, { Suspense, useState, useEffect } from 'react';
import { IoAtCircleOutline } from 'react-icons/io5';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineScene() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          setLoading(false);
          clearInterval(timer);
          return prevProgress;
        }
        const diff = Math.random() * 0.5 + 0.5;
        const newProgress = Number((prevProgress + diff).toFixed(2));
        return Math.min(newProgress, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const splineSceneURL = "https://prod.spline.design/2XATKb6a1CPylYeF/scene.splinecode";

  return (

    <section className="relative h-screen w-[99%]" id='home'>
      {loading ? (
        <div className="absolute z-10 flex items-center justify-center bg-black bg-opacity-20 w-full h-full">
          <div className="text-lg text-white">
            <div className="text-center">
              <div className="text-md font-bold text-textBase pb-1">
                Desk Loading {progress.toFixed(1)}%
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-11 h-11 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-5 h-5 bg-icodow rounded-full animate-spin"></div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <>

          <Suspense fallback={<div>Loading...</div>}>
            <Spline scene={splineSceneURL} />
          </Suspense>

          <div className='absolute bottom-5 w-full justify-center items-center flex'>
            <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl cursor-pointer'>
              <IoAtCircleOutline className='text-md text-textBase'></IoAtCircleOutline>
              <p className='text-md text-textBase'>ayushtiwari.co</p>
            </div>
          </div>
        </>
      )}



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
