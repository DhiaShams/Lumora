import React from "react";
import lumora26 from "../../assets/title.png";

const Hero = () => {
  return (
    <section
      id="home"
      // CHANGE HERE: min-h-[70svh] is for mobile, md:min-h-[100svh] overrides it for desktop/browser
      className="relative min-h-[70svh] md:min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Rectangles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-3xl blur-2xl opacity-90"
          style={{
            top: "8%",
            left: "5%",
            width: "300px",
            height: "190px",
            background: "linear-gradient(135deg, #86efac 0%, #67e8f9 100%)",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="absolute rounded-3xl blur-2xl opacity-80"
          style={{
            top: "12%",
            right: "8%",
            width: "340px",
            height: "220px",
            background: "linear-gradient(135deg, #7dd3fc 0%, #c4b5fd 100%)",
            transform: "rotate(-18deg)",
          }}
        />

        <div
          className="absolute rounded-3xl blur-2xl opacity-80"
          style={{
            top: "45%",
            left: "2%",
            width: "260px",
            height: "180px",
            background: "linear-gradient(135deg, #6ee7b7 0%, #67e8f9 100%)",
            transform: "rotate(-25deg)",
          }}
        />

        <div
          className="absolute rounded-3xl blur-2xl opacity-75"
          style={{
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%) rotate(12deg)",
            width: "320px",
            height: "210px",
            background: "linear-gradient(135deg, #7dd3fc 0%, #a5b4fc 100%)",
          }}
        />

        <div
          className="absolute rounded-3xl blur-2xl opacity-75"
          style={{
            bottom: "10%",
            right: "12%",
            width: "280px",
            height: "180px",
            background: "linear-gradient(135deg, #a5b4fc 0%, #93c5fd 100%)",
            transform: "rotate(-8deg)",
          }}
        />

        <div
          className="absolute rounded-2xl blur-xl opacity-70"
          style={{
            top: "5%",
            left: "42%",
            width: "190px",
            height: "130px",
            background: "linear-gradient(135deg, #67f9c8ff 0%, #d0c6faff 100%)",
            transform: "rotate(22deg)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <img
          src={lumora26}
          alt="LUMORA 26"
          className="
            w-[240px]
            sm:w-[420px]
            md:w-[560px]
            lg:w-[640px]
            mb-6
            drop-shadow-lg
          "
        />
        <div className="text-white text-center mb-10">
         <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wider">
            <span className="text-[#39a85b]">DESIGN</span>
            <span className="mx-2 opacity-50 text-black">•</span>
            <span className="text-[#ecb22e]">INNOVATE</span>
            <span className="mx-2 opacity-50 text-black">•</span>
            <span className="text-[#e94235]">ILLUMINATE</span>
          </h2>
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform shadow-lg">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;