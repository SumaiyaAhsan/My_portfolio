import React, { useState } from "react";
import {FaEnvelope,FaLinkedin,FaGithub,FaWhatsapp,FaPaperPlane,} from "react-icons/fa";


const contactMethods =[
  {
    label: "Email",
    value: "sumaiyaahsan026@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyaahsan026@gmail.com",
    icon: FaEnvelope,
    accent: "#1B98B5",
  },
  {
    label: "LinkedIn",
    value: "sumaiya-ahsan",
    href: "https://www.linkedin.com/in/sumaiya-ahsan-9a200732b/",
    icon: FaLinkedin,
    accent: "#0A66C2",
  },
  {
    label: "GitHub",
    value: "SumaiyaAhsan",
    href: "https://github.com/SumaiyaAhsan",
    icon: FaGithub,
    accent: "#24292e",
  },
  {
    label: "WhatsApp",
    value: "+880 1745 755606",
    href: "https://wa.me/8801745755606",
    icon: FaWhatsapp,
    accent: "#25D366",
  },
];



function ContactSection(){
  const [form, setForm] = useState({ name: "", email: "", message: "" });


  const handleChange =(e)=>{
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit=(e)=>{
    e.preventDefault();


    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sumaiyaahsan026@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };



  return (
    <section
      id="contact"
      className="bg-white py-20 sm:py-24 px-5 sm:px-8 lg:px-16"
    >
      <div className="max-w-6xl w-full mx-auto">

        
        
        {/*Section heading*/}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#D68A4F] font-medium tracking-widest uppercase
                        text-xs sm:text-sm mb-3">
            Let's connect
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B98B5] mb-4">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-[#D68A4F] mx-auto rounded-full"></div>
          
          <p className="text-gray-500 mt-4 sm:mt-5
                        text-sm sm:text-base
                        max-w-xl mx-auto px-2">
            Have a project, collaboration idea, or just want to say hi?
            My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10">

        
        
          {/*Contact methods*/}
          <div className="md:col-span-2 space-y-3 sm:space-y-4">
            {contactMethods.map((method)=>{
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 sm:gap-4
                             p-4 sm:p-5
                             bg-[#fdfcf9] rounded-2xl
                             border border-gray-100
                             hover:border-transparent
                             shadow-[0_4px_20px_-8px_rgba(27,152,181,0.45)]
                             hover:-translate-y-1
                             hover:shadow-[0_20px_40px_-12px_rgba(27,152,181,0.35)]
                             transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full
                               flex items-center justify-center shrink-0
                               transition-transform duration-300
                               group-hover:scale-110"
                    style={{ backgroundColor: `${method.accent}15` }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: method.accent }}
                    />
                  </div>

                  <div className="overflow-hidden min-w-0">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">
                      {method.label}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 font-medium truncate">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          
          
          {/*Contact form*/}
          <div className="md:col-span-3 bg-[#fdfcf9] rounded-2xl
                          p-6 sm:p-8
                          border border-gray-100
                          shadow-[0_4px_20px_-8px_rgba(27,152,181,0.45)]">

            <h3 className="text-lg sm:text-xl font-bold text-[#1B98B5] mb-5 sm:mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">



              <div>
                <label className="block text-xs uppercase tracking-wider
                                  text-gray-400 mb-1.5 sm:mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Nona"
                  className="w-full px-3.5 sm:px-4
                             py-2.5 sm:py-3
                             rounded-xl
                             bg-white border border-gray-200
                             text-sm text-gray-700
                             focus:outline-none focus:border-[#1B98B5]
                             focus:ring-2 focus:ring-[#1B98B5]/20
                             transition duration-200"
                />
              </div>

              
              
             
              <div>
                <label className="block text-xs uppercase tracking-wider
                                  text-gray-400 mb-1.5 sm:mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 sm:px-4
                             py-2.5 sm:py-3
                             rounded-xl
                             bg-white border border-gray-200
                             text-sm text-gray-700
                             focus:outline-none focus:border-[#1B98B5]
                             focus:ring-2 focus:ring-[#1B98B5]/20
                             transition duration-200"
                />
              </div>

              
              
              
              <div>
                <label className="block text-xs uppercase tracking-wider
                                  text-gray-400 mb-1.5 sm:mb-2 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project or just say hi..."
                  className="w-full px-3.5 sm:px-4
                             py-2.5 sm:py-3
                             rounded-xl
                             bg-white border border-gray-200
                             text-sm text-gray-700 resize-none
                             focus:outline-none focus:border-[#1B98B5]
                             focus:ring-2 focus:ring-[#1B98B5]/20
                             transition duration-200"
                />
              </div>

            
            
              <button
                type="submit"
                className="w-full sm:w-auto
                           inline-flex items-center justify-center gap-2 sm:gap-3
                           px-7 sm:px-8
                           py-3 sm:py-3.5
                           bg-[#228B22] text-white rounded-full
                           font-medium tracking-wide
                           hover:bg-[#157a91]
                           transition duration-300
                           shadow-md hover:shadow-lg group"
              >
                <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;