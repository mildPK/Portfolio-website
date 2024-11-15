import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/mypicwithframe.png';  

const AboutMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center flex-col px-5 sm:px-10 bg-neutral-900 text-stone-400">
      <h1 className="text-4xl sm:text-6xl text-white font-semibold mt-2">About Me</h1>
      <p className="text-xl sm:text-2xl text-stone-400 mt-5 text-center">
        Hi, I'm <span className="text-white font-bold">Phutthikiat Geawgla</span>, but you can call me <span className="text-white font-bold">Mild</span>.
      </p>
      
      <div className="mt-8 text-center">
        <img src={pic} alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-4 object-cover border-stone-400" />
        <h2 className="text-2xl sm:text-3xl font-semibold">Personal Information</h2>
        <p className="text-lg sm:text-xl mt-2">
          Age: <span className="font-semibold">18</span><br />
          Nationality: <span className="font-semibold">Thai</span><br />
          Date of Birth: <span className="font-semibold">August 2, 2006</span><br />
          Blood Type: <span className="font-semibold">O</span><br />
          Religion: <span className="font-semibold">Buddhism</span><br />
          Address: <span className="font-semibold">127 Soi Wat Yai Rom, Bang Mod, Chom Thong, Bangkok 10150, Thailand</span>
        </p>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Interests & Aspirations</h2>
        <p className="text-lg sm:text-xl mt-2">
          I have a passion for <span className="font-semibold">gaming</span>, <span className="font-semibold">sports</span> (football and basketball), and <span className="font-semibold">guitar</span>. I'm also interested in <span className="font-semibold">coding</span> and aspire to become a <span className="font-semibold">programmer</span> and <span className="font-semibold">entrepreneur</span>.
        </p>
      </div>

      <button 
        onClick={() => navigate(-1)} 
        className="mt-8 mb-4 px-6 py-2 bg-stone-400 text-black text-lg font-semibold rounded hover:bg-stone-500 transition duration-200"
      >
        Back
      </button>
    </div>
  );
};

export default AboutMore;
