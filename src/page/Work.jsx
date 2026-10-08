import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaArrowRight, FaFolderOpen } from "react-icons/fa";


const projects =[
  {
    title: "Book Shop",
    description:
      "A DBMS-based book shop management system for handling inventory, orders, and customer records. Built with SQL for the database layer and a simple HTML/CSS interface.",
    tech: ["SQL", "HTML", "CSS", "JS", "PHP"],
    link: "https://github.com/Nusrat-Rahe/shop_db",
    accent: "#1B98B5",
    tag: "Database Project",
  },
  {
    title: "MoodMusicPlayer",
    description:
      "An object-oriented desktop music player built in Java, applying core OOP principles like inheritance, polymorphism, and encapsulation to organize playback logic and playlist handling.",
    tech: ["Java", "OOP", "Swing"],
    link: "https://github.com/samiha-islam/MoodMusicPlayer",
    accent: "#D68A4F",
    tag: "OOP Project",
  },
];


function Work() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdfcf9]
                    pt-24 sm:pt-28
                    pb-16 sm:pb-24
                    px-5 sm:px-8 lg:px-16">

      <div className="max-w-6xl mx-auto">



        {/*Back button*/}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-gray-500
                     hover:text-[#1B98B5] transition-colors
                     text-sm font-bold mb-8 sm:mb-10"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to Home
        </button>



        {/*heading*/}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         font-bold text-[#1B98B5] mb-4">
            My Work
          </h1>
          <div className="w-20 h-1 bg-[#D68A4F] mx-auto rounded-full"></div>
         
          <p className="text-gray-500 mt-4 sm:mt-5
                        text-sm sm:text-base
                        max-w-xl mx-auto px-2">
            A collection of projects I've built while learning — from
            database systems to object-oriented applications.
          </p>
        </div>



        {/*cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl
                         p-6 sm:p-8
                         border border-gray-100
                         shadow-[0_4px_20px_-8px_rgba(27,152,181,0.35)]
                         hover:shadow-[0_20px_40px_-12px_rgba(27,152,181,0.45)]
                         hover:-translate-y-2
                         transition-all duration-500
                         flex flex-col"
            >
              
              
              {/*Preview box*/}
              <div
                className="relative w-full h-44 sm:h-52 md:h-56
                           rounded-xl mb-5 sm:mb-6 overflow-hidden
                           flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}44)`,
                }}
              >
                <FaFolderOpen
                  className="w-12 h-12 sm:w-14 sm:h-14 opacity-40 mb-3"
                  style={{ color: project.accent }}
                />
                <span
                  className="absolute bottom-4 sm:bottom-5
                             text-xl sm:text-2xl font-bold tracking-wide
                             text-center px-3"
                  style={{ color: project.accent }}
                >
                  {project.title}
                </span>



                {/*Tag*/}
                <span
                  className="absolute top-3 sm:top-4 right-3 sm:right-4
                             text-[9px] sm:text-[10px] uppercase
                             tracking-widest font-bold
                             px-2.5 sm:px-3 py-1 rounded-full
                             bg-white/80 backdrop-blur-sm"
                  style={{ color: project.accent }}
                >
                  {project.tag}
                </span>




                {/* Hover*/}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}11, transparent)`,
                  }}
                ></div>
              </div>



              {/*Title*/}
              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>



              {/*Description*/}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed
                            mb-5 sm:mb-6 flex-1">
                {project.description}
              </p>



              {/*Tech tags*/}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium
                               px-2.5 sm:px-3 py-1 rounded-full"
                    style={{
                      color: project.accent,
                      backgroundColor: `${project.accent}15`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>



              {/*View button*/}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium
                           transition-all duration-300 group/btn"
                style={{ color: project.accent }}
              >
                <FaGithub className="w-4 h-4" />
                <span>View on GitHub</span>
                <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>



        {/*updatte pill */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 sm:gap-3
                          px-4 sm:px-6 py-2.5 sm:py-3 rounded-full
                          bg-white border border-gray-100
                          shadow-[0_4px_20px_-8px_rgba(27,152,181,0.45)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D68A4F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D68A4F]"></span>
            </span>
            <span className="text-xs sm:text-sm text-gray-600 text-left">
              More projects in progress — check back soon!
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Work;