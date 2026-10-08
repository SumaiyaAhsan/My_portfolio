import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaPhoneAlt } from "react-icons/fa";


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");


  const links = [
    { name: "Home",    target: "top",     icon: FaHome },
    { name: "About",   target: "about",   icon: FaUser },
    { name: "Skills",  target: "skills",  icon: FaCode },
    { name: "Contact", target: "contact", icon: FaPhoneAlt },
  ];



  //active section detect 
  useEffect(()=>{
    if (location.pathname !== "/") {
      setActive("");
      return;
    }


    //scrolling time
    const handleScroll =()=>{
       const scrollY=window.scrollY;
       const windowH=window.innerHeight;

      if(scrollY <windowH*0.4)
      {
        setActive("home");
        return;
      }

      const sections=["about","skills","contact"];
      let current= "home"; 



      sections.forEach((id)=> {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop-windowH/3;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return()=> window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);



  //click
  const handleClick=(e,link)=>{
    e.preventDefault();

    if(location.pathname!=="/")
    {
      navigate("/");
      setTimeout(()=>scrollTo(link.target), 150);
    } 
    else
    {
      scrollTo(link.target);
    }

  };


  const scrollTo=(target)=>{
    if (target=== "top") 
    {
      window.scrollTo({ top:0,behavior:"smooth" });
    } 
    else 
    {
      const el=document.getElementById(target);

      if(el)
      { 
        el.scrollIntoView({behavior:"smooth", block: "start" });
      }

    }

  };




  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <div className="bg-white shadow-[0_4px_20px_-8px_rgba(27,152,181,0.65)] rounded-full
                      px-1.5 py-1.5 sm:px-2 sm:py-2
                      flex gap-1 sm:gap-1.5
                      whitespace-nowrap">


        {links.map((link)=>{
          const isActive =(link.target==="top" && active==="home") || link.target===active;
          const Icon = link.icon;



          return (
            <button
              key={link.name}
              onClick={(e) => handleClick(e, link)}
              aria-label={link.name}
              className={`flex items-center gap-1.5 sm:gap-2
                          px-3 sm:px-4 lg:px-5 xl:px-6
                          py-2 sm:py-2.5
                          rounded-full
                          text-xs sm:text-sm lg:text-[15px]
                          font-semibold
                          transition-all duration-300
                          ${isActive
                            ? "bg-[#1B98B5]/10 text-[#1B98B5]"
                            : "text-gray-600 hover:bg-gray-100"
                          }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isActive ? "text-[#1B98B5]" : "text-gray-500"
                }`}
              />
              <span className="hidden sm:inline">{link.name}</span>
            </button>
          );
        })}

      </div>
    </nav>
  );
}

export default Navbar;