import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiArduino } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      category: "Front-End",
      list: [
        { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-600" />, level: "Beginner" },
        { name: "CSS3", icon: <FaCss3Alt className="text-7xl text-blue-400" />, level: "Beginner" },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-7xl text-yellow-400" />, level: "Beginner" },
        { name: "React", icon: <FaReact className="text-7xl text-cyan-400" />, level: "Beginner" },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-7xl text-teal-400" />, level: "Beginner" }
      ]
    },
    {
      category: "Back-End",
      list: [
        { name: "Python", icon: <FaPython className="text-7xl text-white" />, level: "Beginner" },
        { name: "PHP", icon: <FaPhp className="text-7xl text-violet-500" />, level: "Beginner" }
      ]
    },
    {
      category: "Others",
      list: [
        { name: "Photoshop", icon: <DiPhotoshop className="text-7xl text-blue-600" />, level: "Beginner" },
        { name: "Arduino", icon: <SiArduino className="text-7xl text-teal-500" />, level: "Beginner" }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full pt-20" id="skills">
      <h1 className="text-white font-semibold text-4xl sm:text-6xl text-center">My Skills</h1>
      
      {skills.map((skillCategory, index) => (
        <div key={index} className="my-10">
          <p className="text-xl sm:text-2xl text-stone-400 text-center my-5">{skillCategory.category}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {skillCategory.list.map((skill, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center space-y-2">
                {skill.icon}
                <p className="text-white text-lg font-semibold">{skill.name}</p>
                <p className="text-lg text-stone-400">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
