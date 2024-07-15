import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"


const Hero = () => {
 const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

 const handleVideoSrcSet = () => {
  if(window.innerWidth < 760) {
    setVideoSrc(smallHeroVideo)
  } else {
    setVideoSrc(heroVideo)
  }
 }

//  You need to clean the EventListener returning the function
 useEffect(() => {
  window.addEventListener("resize", handleVideoSrcSet)

  return() => {
    window.addEventListener("resize", handleVideoSrcSet)
  }
 }, [])

  useGSAP(() => {
    // This is the first animation. It's timple, but implement delay and make the letters show
    gsap.to("#hero", { opacity: 1, delay: 2.5 })
    // the "y" will make the btn and text up close to the iphone
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2.5 }) 

  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
          {/* In first, the <p> is hidden, because he need to be animated to appear */}
        <p id="hero" className="hero-title">Iphone 15 Pro</p>
        {/* In this div, the video will render and show the video/mp4 */}
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div 
      id="cta"
      className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p>From $199/month or $999</p>
      </div>

    </section>
  )
}

export default Hero