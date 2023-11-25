import ayush from './Images/Ayush.jpg';

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
        <p className=' text-lg text-textBase text-center'>
          I am a passionate individual with a deep love for exploring new horizons. Traveling has been a significant source of inspiration for me, broadening my perspective and nurturing a sense of adventure. Alongside, my insatiable curiosity has led me to dive into the ever-evolving world of technology, where I constantly strive to learn and keep up with the latest advancements. Building ecosystems that foster innovation and connectivity is a personal mission, as I believe in the transformative power of interconnectedness. When not engrossed in the realm of technology, you can find me strumming my guitar, indulging in music, or designing captivating websites. With a clear aim to specialize in connectivity, I am determined to contribute my expertise to the ever-expanding field of technology.
        </p>
      </div>
    </section>
  );
};

export default About;