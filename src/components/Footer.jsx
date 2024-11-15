import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl text-stone-400 font-semibold">Phutthikiat</h3>
          <p className="mt-2">
            A student passionate about creating things that matter. Always eager to learn and collaborate on exciting projects.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl text-stone-400 font-semibold">Contact Info</h3>
          <ul className="mt-2 space-y-1">
            <li>+66925676099</li>
            <li>momai874@gmail.com</li>
            <li>127 Soi Wat Yai Rom, Bang Mod, Chom Thong, Bangkok 10150, Thailand</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-2xl text-stone-400 font-semibold">Social Links</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com/Phutthikiat" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://github.com/mildPK/" aria-label="Github" className="hover:text-violet-500">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com/mxndpk_" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-stone-400 text-xl">
        © 2024 Phutthikiat | Designed by Phutthikiat
      </div>
    </footer>
  );
};

export default Footer;
