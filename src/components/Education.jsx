import React from 'react';
import Bpklogo from '../assets/BPK_Logo.png';
import Yairomlogo from '../assets/YR_Logo.png';

const Education = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start py-10 pt-20" id="education">
          <h1 className="text-white font-semibold text-4xl sm:text-6xl text-center mb-10">
            My Education
          </h1>
          

          <div className="w-full max-w-2xl p-4 space-y-6">

            <div className="space-y-6">

              <div className="flex items-start space-x-4 p-6 border border-stone-500 rounded-lg">

                <div className="w-24 h-24">
                  <img src={Yairomlogo} alt="Watyairom School Logo" className="w-full h-full object-contain rounded-full" />
                </div>

                <div>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Watyairom School</h2>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  Primary School
                  </p>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  1-6
                  </p>
                </div>
              </div>
    

              <div className="flex items-start space-x-4 p-6 border border-stone-500 rounded-lg">

                <div className="w-24 h-24">
                  <img src={Yairomlogo} alt="Watyairom School Logo" className="w-full h-full object-contain rounded-full" />
                </div>

                <div>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Watyairom School</h2>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  Junior High School
                  </p>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  1-3
                  </p>
                </div>
              </div>
    

              <div className="flex items-start space-x-4 p-6 border border-stone-500 rounded-lg">

                <div className="w-24 h-24">
                  <img src={Bpklogo} alt="BPK Logo" className="w-full h-full object-contain rounded-full" />
                </div>

                <div>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">Bangpakok Wittayakom School</h2>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  Senior High School
                  </p>
                  <p className="text-stone-400 text-xl sm:text-2xl">
                  4-6
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Education;