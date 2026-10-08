import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.jpeg";
import { FaFileAlt } from "react-icons/fa";


function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#fdfcf9] flex items-center
                        px-5 sm:px-8 lg:px-16
                        pt-24 pb-16 sm:pt-28 sm:pb-20
                        overflow-hidden">

     
     
    
      <div className="max-w-6xl w-full mx-auto
                      grid grid-cols-1 md:grid-cols-2
                      gap-10 md:gap-12 lg:gap-20
                      items-center relative z-10">

       
       
        {/*L side */}
        <div className="order-2 md:order-1 text-center md:text-left">

          <p className="text-gray-500 text-base sm:text-lg md:text-xl
                        mb-2 font-medium tracking-wide">
            Hello, I am
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                         font-bold text-[#1B98B5]
                         leading-tight mb-4 sm:mb-5">
            Sumaiya Ahsan
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-semibold
                        mb-8 sm:mb-10">
            <span className="text-[#1B98B5]">CSE Student</span>
            <span className="text-gray-300 mx-2 sm:mx-3">•</span>
            <span className="text-[#D68A4F]">Aspiring AI Engineer</span>
          </p>



          {/*Buttons*/}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4
                          justify-center md:justify-start">

            <button
              onClick={() => navigate("/work")}
              className="w-full sm:w-auto
                         px-7 sm:px-8 py-3 sm:py-3.5
                         bg-[#1B98B5] text-white rounded-full
                         font-medium tracking-wide
                         hover:bg-[#157a91] transition duration-300"
            >
              View My Work
            </button>



            <button
              onClick={() => navigate("/resume")}
              className="w-full sm:w-auto
                         inline-flex items-center justify-center gap-2
                         px-7 sm:px-8 py-3 sm:py-3.5
                         border-2 border-[#D68A4F] text-[#D68A4F] rounded-full
                         font-medium tracking-wide
                         hover:bg-[#D68A4F] hover:text-white
                         transition duration-300"
            >
              <FaFileAlt className="w-4 h-4" />
              View My Resume
            </button>

          </div>
        </div>




        {/*R side*/}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative
                          w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px]
                          aspect-[4/5]">

          
          
            {/*corner shape*/}
            <div
              className="absolute inset-0 bg-[#7CC7E0]
                         translate-x-[-12px] translate-y-[12px]
                         sm:translate-x-[-16px] sm:translate-y-[16px]
                         md:translate-x-[-20px] md:translate-y-[20px]"
              style={{ borderBottomLeftRadius: "80px", borderTopRightRadius: "80px" }}
            ></div>

           
           
           
           {/*Profile*/}
            <img
              src={profile}
              alt="Sumaiya Ahsan"
              className="relative w-full h-full object-cover"
              style={{ borderBottomLeftRadius: "80px", borderTopRightRadius: "80px" }}
            
            />
          </div>
        </div>

      </div>
    </section>
  );
}
export default Hero;