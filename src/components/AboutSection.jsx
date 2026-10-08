import React from "react";
import {FaGraduationCap,FaMapMarkerAlt,FaPaintBrush,FaHeart,} from "react-icons/fa";


function AboutSection(){
  return (
    <section
      id="about"
      className="bg-white py-20 sm:py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl w-full mx-auto">


        {/*Heading*/}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#D68A4F] font-medium tracking-widest uppercase
                        text-xs sm:text-sm mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B98B5] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[#D68A4F] mx-auto rounded-full"></div>
        </div>


        {/*Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-12
                        gap-10 md:gap-12 lg:gap-20 items-start">


          {/*Facts card*/}
          <div className="md:col-span-4 bg-[#fdfcf9] rounded-3xl
                          p-7 sm:p-8 md:p-10
                          border border-gray-100
                          shadow-[0_4px_20px_-8px_rgba(27,152,181,0.35)]
                          hover:shadow-[0_20px_40px_-12px_rgba(27,152,181,0.45)]
                          hover:-translate-y-2 transition-all duration-500">

            <h3 className="text-xl sm:text-2xl font-bold text-[#1B98B5] mb-6 sm:mb-8">
              Quick Facts
            </h3>

            <div className="space-y-5 sm:space-y-6">


              {/*Education*/}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
                                bg-[#1B98B5]/10
                                flex items-center justify-center shrink-0">
                  <FaGraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B98B5]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                    Education
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium leading-snug">
                    B.Sc. in CSE<br />
                    Metropolitan University, Sylhet
                  </p>
                </div>
              </div>


              {/*Location*/}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
                                bg-[#D68A4F]/10
                                flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-[#D68A4F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>


              {/*Passion*/}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
                                bg-[#D68A4F]/10
                                flex items-center justify-center shrink-0">
                  <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-[#D68A4F]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-medium">
                    Passion
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 font-medium">
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/*Story....*/}
          <div className="md:col-span-8">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold
                           text-gray-800 mb-5 sm:mb-6">
              A little bit about my journey
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5
                          text-sm sm:text-base md:text-lg">
              I'm a Computer Science & Engineering student at{" "}
              <span className="text-[#1B98B5] font-medium">
                Metropolitan University, Sylhet
              </span>
              , currently in my 3rd year. I'm passionate about Artificial
              Intelligence and Machine Learning, and I'm working toward
              becoming an AI Engineer.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5
                          text-sm sm:text-base md:text-lg">
              Outside of code, I'm an artist at heart — I sketch, paint, do
              calligraphy, and care for my many pet birds. I believe the
              creative side and the technical side feed each other: both are
              about noticing patterns and building something meaningful.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8
                          text-sm sm:text-base md:text-lg">
              Right now I'm focused on sharpening my problem-solving skills
              through competitive programming, exploring core CS concepts, and
              gradually stepping into AI/ML. Always learning, always building.
            </p>


          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;