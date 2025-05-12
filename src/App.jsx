import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useState } from "react"
import 'remixicon/fonts/remixicon.css'


const App = () => {
  const [showContent, setShowContent] = useState(false)
  useGSAP(() => {
   const tl = gsap.timeline()

   tl.to(".vi-mask-group", {
     duration: 2,
     rotate: 10,
     ease: "power2.easeInOut",
     transformOrigin: "50% 50%",
   })
   .to(".vi-mask-group", {
     delay: -1.8,
     duration: 2,
     scale: 10,
     ease: "expo.easeInOut",
     transformOrigin: "50% 50%",
     opacity: 0,
     onUpdate: function (){
      if(this.progress() >= 0.9){
        document.querySelector(".svg").remove()
        setShowContent(true)
        this.kill()
      }
     }
   })
  })
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
      <div className="main w-full">
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-4">
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
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-2 absolute left-1/2 top-8 -translate-x-1/2 scale-[1]">
                <h1 className="text-[5rem] leading-none -ml-10">grand</h1>
                <h1 className="text-[5rem] leading-none ml-15">theft</h1>
                <h1 className="text-[5rem] leading-none -ml-20">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[85%] left-1/2 -translate-x-1/2  scale-[0.6]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
               <i class="ri-arrow-down-long-line"></i>
                <h3 className="text-sm font-[Arial]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[45px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
      </div>
    )}
    </>
  )
}
export default App