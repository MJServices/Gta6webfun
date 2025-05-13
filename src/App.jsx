import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      duration: 2,
      rotate: 10,
      ease: "power2.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      delay: -1.8,
      duration: 2,
      scale: 10,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });
  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.8,
      x: "-50%",
      bottom: "-85%", // Adjusted from -85% to -75% for better visibility
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${x * 0.4}%`,
        transformOrigin: "50% 50%",
      });
      gsap.to(".imagesdiv .sky", {
        x: `${x * 0.1}%`,
        transformOrigin: "50% 50%",
      });
      gsap.to(".imagesdiv .bg", {
        x: `${x * 0.2}%`,
        transformOrigin: "50% 50%",
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7] md:scale-[1.5] sm:scale-[1.2]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-5 md:py-8 px-4 md:px-10">
              <div className="logo flex gap-2 md:gap-4">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-5 h-1 bg-white"></div>
                  <div className="line w-3 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[6px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.1] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-1 md:gap-2 absolute left-[40%] top-[15%] sm:top-[20%] md:top-[15%] -translate-x-1/2 scale-[0.7] sm:scale-[0.8] md:scale-[1]">
                <h1 className="text-[4rem] md:text-[5rem] leading-none -ml-5 md:-ml-10">
                  grand
                </h1>
                <h1 className="text-[4rem] md:text-[5rem] leading-none ml-8 md:ml-15">
                  theft
                </h1>
                <h1 className="text-[4rem] md:text-[5rem] leading-none -ml-10 md:-ml-20">
                  auto
                </h1>
              </div>
              <img
                className="absolute character -bottom-[75%] sm:-bottom-[78%] md:-bottom-[85%] left-1/2 -translate-x-1/2 scale-[0.35] sm:scale-[0.45] md:scale-[0.6]"
                src="./girlbg.png"
                alt=""
              />
              <img
                className="absolute inline md:hidden -bottom-[20%] left-1/2 -translate-x-1/2 scale-[1] sm:scale-[0.45] md:scale-[0.6]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 md:py-15 px-4 md:px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
                <i className="ri-arrow-down-long-line"></i>
                <h3 className="text-sm font-[Arial]">Scroll Down</h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-[10%] md:-translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="cntnr flex flex-col md:flex-row text-white w-full h-full p-4 md:p-0">
              <div className="limg relative w-full md:w-1/2 h-[300px] md:h-full mb-8 md:mb-0">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-auto"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-full md:w-[40%] py-4 md:py-30 px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl">Still Running,</h1>
                <h1 className="text-3xl md:text-5xl">Not Hunting</h1>
                <p className="mt-10 text-sm font-[Arial]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-sm font-[Arial]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-10 text-sm font-[Arial]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-6 md:px-10 py-3 md:py-4 text-black mt-6 md:mt-10 text-xl md:text-2xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
