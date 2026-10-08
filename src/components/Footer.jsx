import React from "react";
import { Link } from "react-router-dom";
import {FaGithub,FaLinkedin,FaWhatsapp,FaEnvelope,FaHeart,} from "react-icons/fa";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2b33] text-gray-300
                       pt-12 sm:pt-16 pb-6 sm:pb-8
                       px-5 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

       
       
        {/*Top section*/}
        <div className="grid grid-cols-1 md:grid-cols-3
                        gap-8 sm:gap-10 md:gap-12
                        mb-10 sm:mb-14">

         
         
          {/*Col-1*/}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Sumaiya
              
              <span className="text-[#7CC7E0]">.</span>
            
            
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              CSE student & aspiring AI engineer — learning, building, and
              creating one project at a time.
            </p>
          </div>

          
          
          {/*links*/}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/#about"
                  className="text-gray-400 hover:text-[#7CC7E0] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  className="text-gray-400 hover:text-[#7CC7E0] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-gray-400 hover:text-[#7CC7E0] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="text-gray-400 hover:text-[#7CC7E0] transition-colors"
                >
                  Resume
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-[#7CC7E0] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

         
         
          {/*Social*/}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 tracking-wide">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href="https://github.com/SumaiyaAhsan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 sm:w-10 sm:h-10
                           flex items-center justify-center rounded-full
                           bg-white/5 text-gray-300
                           hover:bg-[#7CC7E0] hover:text-[#1a2b33]
                           hover:-translate-y-1
                           transition duration-300"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sumaiya-ahsan-9a200732b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10
                           flex items-center justify-center rounded-full
                           bg-white/5 text-gray-300
                           hover:bg-[#7CC7E0] hover:text-[#1a2b33]
                           hover:-translate-y-1
                           transition duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyaahsan026@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="w-9 h-9 sm:w-10 sm:h-10
                           flex items-center justify-center rounded-full
                           bg-white/5 text-gray-300
                           hover:bg-[#7CC7E0] hover:text-[#1a2b33]
                           hover:-translate-y-1
                           transition duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801745755606"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 sm:w-10 sm:h-10
                           flex items-center justify-center rounded-full
                           bg-white/5 text-gray-300
                           hover:bg-[#7CC7E0] hover:text-[#1a2b33]
                           hover:-translate-y-1
                           transition duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        
        
        {/*divider*/}
        <div className="border-t border-white/10 pt-5 sm:pt-6
                        flex flex-col sm:flex-row
                        items-center justify-between
                        gap-2 sm:gap-3
                        text-xs sm:text-sm text-gray-400 text-center sm:text-left">

          <p>
            © {year}{" "}
            <span className="text-[#7CC7E0] font-medium">Sumaiya Ahsan</span>.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Designed & built with
            <FaHeart className="w-3 h-3 text-[#f26d6d] animate-pulse" />
            by Sumaiya
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;