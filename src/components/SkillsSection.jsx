import React from "react";
import { FaCode, FaLaptopCode, FaBrain } from "react-icons/fa";

const skillGroups =[
  {
    title: "Languages",
    icon: FaCode,
    accent: "#1B98B5",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    title: "Core Skills",
    icon: FaLaptopCode,
    accent: "#D68A4F",
    skills: [
      "Competitive Programming",
      "Web Development",
      "DBMS",
      "OOP",
    ],
  },
  {
    title: "Currently Learning",
    icon: FaBrain,
    accent: "#1B98B5",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
];



function SkillsSection(){

  return(
    <section
      id="skills"
      className="bg-[#fdfcf9] min-h-screen md:flex md:items-center py-20 sm:py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl w-full mx-auto">




        {/*heading*/}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#D68A4F] font-medium tracking-widest uppercase
                        text-xs sm:text-sm mb-3">
            What I know
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B98B5] mb-4">
            Skills
          </h2>
         
          <div className="w-20 h-1 bg-[#D68A4F] mx-auto rounded-full"></div>
        
          <p className="text-gray-500 mt-4 sm:mt-5
                        text-sm sm:text-base
                        max-w-xl mx-auto px-2">
            The tools and concepts I work with — and what I'm learning next.
          </p>
        </div>




        {/*cards*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;


            return (
              <div
                key={group.title}
                className="group bg-white rounded-2xl
                           p-6 sm:p-8
                           border border-gray-100
                           shadow-[0_4px_20px_-8px_rgba(27,152,181,0.35)]
                           hover:shadow-[0_20px_40px_-12px_rgba(27,152,181,0.45)]
                           hover:-translate-y-2
                           transition-all duration-500"
              >
               

                {/*Icon*/}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                             mb-5 sm:mb-6
                             flex items-center justify-center
                             transition-transform duration-500
                             group-hover:rotate-6"
                  style={{ backgroundColor: `${group.accent}15` }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: group.accent }}
                  />
                </div>

               

                {/*Title*/}
                <h3
                  className="text-lg sm:text-xl font-bold mb-4 sm:mb-5"
                  style={{ color: group.accent }}
                >
                  {group.title}
                </h3>

              
              
                {/*Skills list*/}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm font-medium
                                 px-2.5 sm:px-3
                                 py-1 sm:py-1.5
                                 rounded-full
                                 transition-colors duration-300"
                      style={{
                        color: group.accent,
                        backgroundColor: `${group.accent}12`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SkillsSection;