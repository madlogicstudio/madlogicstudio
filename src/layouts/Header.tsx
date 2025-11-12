import { useEffect, useRef, type SetStateAction } from "react";
import Icon from "../assets/ui/banner.png"
import Background from "../assets/vids/landing.mp4"
import Theme from "../components/Theme";
import Tagline from "../components/Tagline";

declare const gsap: any; 

type HeaderProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
}

function Header({ isDark, setIsDark}: HeaderProps) {

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleSkip = () => {
        const section = document.getElementById("about");
        if (!section) return;
      
        const headerHeight = window.innerHeight;
      
        if (window.ScrollSmoother) {
          window.ScrollSmoother.scrollTo(section, {
            offsetY: -headerHeight,
            duration: 1.2,
            ease: "power2.out"
          });
        } else {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
    };      

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (video.readyState >= 3) {
            console.log('Video already loaded');
        } else {
            video.addEventListener(
                'canplay',
                () => console.log('Video ready to play'),
                { once: true }
            );
        }
    }, []);

    const gotoAbout = () => {
        const section = document.getElementById("about");
        if (!section) return;
      
        const headerHeight = window.innerHeight;
      
        if (window.ScrollSmoother) {
          window.ScrollSmoother.scrollTo(section, {
            offsetY: -headerHeight,
            duration: 1.2,
            ease: "power2.out"
          });
        } else {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top: sectionTop, behavior: "smooth" });
        }
    };  
      
    return (
        <div id="header" className={`fixed top-0 left-0 h-screen w-full flex flex-row items-start justify-center`}>
            <video ref={videoRef} autoPlay muted loop className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 filter brightness-100">
                <source src={Background} type="video/mp4" />
            </video>
            <div className="z-3 h-auto w-full flex flex-row items-center justify-start">
                <div className="flex-1 z-2 flex flex-row items-center justify-start gap-[calc(0.4vw+0.6rem)] p-[calc(0.3vw+0.4rem)]">
                    <img src={Icon} className="h-[calc(2.6vw+2.8rem)] w-[calc(6.4vw+6.6rem)] cursor-pointer" alt="" />
                </div>
                <div className="flex-1 z-2 flex flex-row items-center justify-center p-[calc(0.6vw+1.2rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span title="Skip to Work" className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Work</span>
                    <span title="Skip to Services" className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Services</span>
                    <span title="Skip to About" className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer"
                        onClick={gotoAbout}>About</span>
                    <span title="Skip to Github" className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Github</span>
                </div>
                <div className="flex-1 z-2 flex flex-row items-center justify-end p-[calc(0.4vw+0.6rem)]">
                    <span className="px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] 
                        text-[calc(0.4vw+0.6rem)] text-[var(--light-color)] bg-[var(--dark-color)] cursor-pointer font-semibold 
                        hover:bg-[var(--light-color)] hover:text-[#1A3D64] transition duration-300 ease-in-out">Let's Talk</span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Tagline />
            </div>
            <div className={`z-2 absolute bottom-0 left-0 w-full p-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-between`}>
                <div className="gap-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-start">
                    <i title="Skip Page" className="bx bx-sparkle-square bx-spin-hover hovered text-[calc(0.8vw+1.4rem)] cursor-pointer"
                        onClick={handleSkip}></i> 
                    <span className="spacemono font-bold text-[calc(0.4vw+0.7rem)]">Skip Page</span>
                </div>
                <div className="gap-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-start">
                    <span className="spacemono font-bold text-[calc(0.4vw+0.7rem)]">Change Theme</span>
                    <Theme isDark={isDark} setIsDark={setIsDark}/>
                </div>
            </div>
        </div>
    )
}

export default Header