import ayush from '/Images/Ayush.jpg';

const About = () => {
  return (

    <section className='w-full grid grid-cols-1 pt-7 md:grid-cols-2 gap-4 my-24 ' id='about'>
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
        <p className=' text-lg text-[#262627] text-center'>
          Passionate explorer with a love for travel and a tech enthusiast. Committed to fostering innovation and connectivity in the ever-evolving tech world. Specializing in building transformative ecosystems. Beyond tech, I enjoy music, playing guitar, and designing captivating websites. Determined to contribute expertise to the expanding field of technology.
        </p>
      </div>
    </section>
  );
};

export default About;