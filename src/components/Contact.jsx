import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" id="contact">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">Contact Me</h1>
        <p className="text-stone-400 mt-2 text-xl sm:text-2xl">If you have any questions or just want to chat, feel free to contact me!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex flex-col items-center">
        <IoIosMail className="text-6xl text-white" />
          <p className="mt-2 text-xl text-stone-500 sm:text-2xl font-semibold">EMAIL</p>
          <p className="text-stone-400 text-lg sm:text-xl">momai874@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
        <FaPhone className="text-6xl text-white" />
          <p className="mt-2 text-xl text-stone-500 sm:text-2xl font-semibold">PHONE</p>
          <p className="text-stone-400 text-lg sm:text-xl">+66925676099</p>
        </div>
        <div className="flex flex-col items-center">
        <FaFacebook className="text-6xl text-white"/>
          <p className="mt-2 text-xl text-stone-500 sm:text-2xl font-semibold">FACEBOOK</p>
          <a target="_blank" href="https://www.facebook.com/Phutthikiat" className="text-stone-400 hover:text-white text-lg ">Follow me</a>
        </div>
        <div className="flex flex-col items-center">
        <FaGithub className="text-6xl text-white" />
          <p className="mt-2 text-xl text-stone-500 sm:text-2xl font-semibold">GITHUB</p>
          <a target="_blank" href="https://github.com/mildPK/" className="text-stone-400 hover:text-white text-lg">Follow me</a>
        </div>
        <div className="flex flex-col items-center">
        <FaInstagram className="text-6xl text-white" />
          <p className="mt-2 text-xl text-stone-500 sm:text-2xl font-semibold">INSTAGRAM</p>
          <a target="_blank" href="https://www.instagram.com/mxndpk_/" className="text-stone-400 hover:text-white text-lg">Follow me</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
