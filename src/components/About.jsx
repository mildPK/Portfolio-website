import React from 'react';
import Pic from '../assets/pic22.jpg';
import { Link } from 'react-router-dom'; // ใช้ Link จาก react-router-dom
import { scroller } from 'react-scroll';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-5 sm:px-10 " id="about" >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg mx-auto text-stone-400">
        <div className="flex-1 w-full md:w-1/2">
          <p className="text-xl sm:text-2xl text-stone-400">Who I Am</p>
          <h1 className="text-4xl sm:text-6xl text-white font-semibold mt-2">ABOUT ME</h1>
          <p className="text-xl sm:text-2xl mt-5 leading-7">
          My name is Phutthikiat Geawgla. My nickname is Mild. I'm a student at Bangpakok Wittayakom School. I like making websites. I enjoy playing sports and often practice to get better. I also like to improve my other skills, like design. I enjoy trying new things and learning, both in school and in my free time.
          </p>
          <div className="flex mt-8 space-x-4">
            <button
              className="hover:text-white hover:bg-stone-500 bg-stone-400 text-xl text-black px-6 py-2 font-medium rounded"
              onClick={() => scroller.scrollTo('contact', {duration: 500, delay: 0, smooth: 'easeInOutQuart'})}>
              Contact
            </button>
            <Link to="/about-more">
              <button className="hover:text-white hover:border-stone-500 border text-xl border-stone-400 text-stone-400 px-6 py-2 font-medium rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full md:w-1/2 mt-10 md:mt-0 md:ml-10 flex justify-center">
          <img className="w-full max-w-xs sm:max-w-sm h-auto object-cover border-2 border-stone-400 hover:transform hover:scale-105 transition-transform duration-300" src={Pic} alt="My picture" />
        </div>
      </div>
    </div>
  );
};

export default About;
