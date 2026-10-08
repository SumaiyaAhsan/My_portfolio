import React from "react";
import { useNavigate } from "react-router-dom";
import {FaArrowLeft,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt,FaLinkedin,FaGithub,FaGraduationCap,FaCode,FaPrint,} from "react-icons/fa";


const resumeData = {
  name: "Sumaiya Ahsan",
  role: "CSE Student · Aspiring AI Engineer",
  email: "sumaiyaahsan026@gmail.com",
  phone: "+880 1745 755606",
  location: "Sylhet, Bangladesh",
  linkedin: "https://www.linkedin.com/in/sumaiya-ahsan-9a200732b/",
  github: "https://github.com/SumaiyaAhsan",

  summary:
    "Third-year Computer Science & Engineering student at Metropolitan University, Sylhet, with a strong foundation in programming and problem-solving. Passionate about Artificial Intelligence and Machine Learning, actively building projects and sharpening skills through competitive programming. Looking for internship opportunities to apply and grow my technical abilities.",

  education:[
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Metropolitan University, Sylhet",
      year: "2024 – Present (3rd year)",
      result: "CGPA: 3.91 / 4.00",
    },

    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Jalalabad Cantonment Public School & College",
      year: "2022",
      result: "GPA: 5.00 / 5.00",
    },

    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Jalalabad Cantonment Public School & College",
      year: "2020",
      result: "GPA: 5.00 / 5.00",
    },
  ],

  skills:{
    Languages:["C", "C++", "Python", "Java"],
    Concepts:["OOP", "DBMS", "Competitive Programming", "Web Development"],
    Tools: ["GitHub", "VS Code", "MySQL / SQL", "Canva"],
    "Currently Learning": ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },


  languages: ["Bengali (Native)", "English (Intermediate)"],
};


function Resume() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="min-h-screen bg-[#fdfcf9]
                    pt-24 sm:pt-28
                    pb-14 sm:pb-20
                    px-5 sm:px-8 lg:px-16
                    print:bg-white print:pt-0 print:pb-0 print:px-0">


      {/*Top bar*/}
      <div className="max-w-4xl mx-auto
                      flex flex-col sm:flex-row
                      items-stretch sm:items-center
                      justify-between gap-3 sm:gap-0
                      mb-6 sm:mb-8 print:hidden">


        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center justify-center sm:justify-start
                     gap-2 text-gray-500
                     hover:text-[#1B98B5] transition-colors
                     text-sm font-medium"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to Home
        </button>
      </div>


      {/*Resume paper*/}
      <div className="max-w-4xl mx-auto bg-white
                      rounded-2xl
                      p-6 sm:p-10 md:p-12
                      border border-gray-100
                      shadow-[0_20px_60px_-20px_rgba(27,152,181,0.35)]
                      print:shadow-none print:border-none print:rounded-none print:p-0">



        {/*Header*/}
        <header className="border-b-2 border-[#1B98B5] pb-5 sm:pb-6 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B98B5] mb-2">
            {resumeData.name}
          </h1>
          <p className="text-[#D68A4F] font-semibold text-sm sm:text-base mb-4 sm:mb-5">
            {resumeData.role}
          </p>

          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2
                          text-xs sm:text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 break-all">
              <FaEnvelope className="w-3 h-3 text-[#1B98B5] shrink-0" />
              {resumeData.email}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaPhoneAlt className="w-3 h-3 text-[#1B98B5] shrink-0" />
              {resumeData.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="w-3 h-3 text-[#1B98B5] shrink-0" />
              {resumeData.location}
            </span>
            <a
              href={resumeData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#1B98B5] transition"
            >
              <FaLinkedin className="w-3 h-3 text-[#1B98B5] shrink-0" />
              linkedin.com/in/sumaiya-ahsan
            </a>
            <a
              href={resumeData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#1B98B5] transition"
            >
              <FaGithub className="w-3 h-3 text-[#1B98B5] shrink-0" />
              github.com/SumaiyaAhsan
            </a>
          </div>
        </header>




        {/*Summary*/}
        <section className="mb-7 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-bold text-[#D68A4F]
                         uppercase tracking-widest mb-3">
            Summary
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {resumeData.summary}
          </p>
        </section>




        {/*Education*/}
        <section className="mb-7 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-bold text-[#D68A4F]
                         uppercase tracking-widest mb-3 sm:mb-4
                         flex items-center gap-2">
            <FaGraduationCap className="w-3.5 h-3.5" />
            Education
          </h2>

          <div className="space-y-4">
            {resumeData.education.map((edu, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-[1fr_auto]
                           gap-1 sm:gap-6
                           pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 sm:text-right">
                  <p className="font-medium text-[#1B98B5]">{edu.year}</p>
                  <p>{edu.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>




        {/* Skills */}
        <section className="mb-7 sm:mb-8">
          <h2 className="text-xs sm:text-sm font-bold text-[#D68A4F]
                         uppercase tracking-widest mb-3 sm:mb-4
                         flex items-center gap-2">
            <FaCode className="w-3.5 h-3.5" />
            Skills
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {Object.entries(resumeData.skills).map(([category, items]) => (
              <div
                key={category}
                className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-700">
                  {category}
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium
                                 px-2.5 sm:px-3 py-1 rounded-full
                                 bg-[#1B98B5]/10 text-[#1B98B5]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

                

        {/* Languages */}
        <section>
          <h2 className="text-xs sm:text-sm font-bold text-[#D68A4F]
                         uppercase tracking-widest mb-3">
            Languages
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {resumeData.languages.map((lang) => (
              <span
                key={lang}
                className="text-xs sm:text-sm font-medium
                           px-3 sm:px-4 py-1.5 rounded-full
                           bg-[#1B98B5]/10 text-[#1B98B5]"
              >
                {lang}
              </span>
            ))}
          </div>
        </section>

      </div>



      {/* Print-only page styling */}
      <style>{`
        @media print {
          body { background: white !important; }
          @page { margin: 15mm; }
        }
      `}</style>

    </div>
  );
}

export default Resume;