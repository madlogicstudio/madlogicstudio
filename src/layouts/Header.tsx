import { useEffect, useRef, type SetStateAction } from "react";
import Icon from "../assets/ui/banner.png"
import Background from "../assets/vids/landing.mp4"
import Theme from "../components/Theme";

declare const gsap: any; 

type HeaderProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
}

function Header({ isDark, setIsDark}: HeaderProps) {

    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current) return;
      
        const lines = Array.from(textRef.current.querySelectorAll<HTMLElement>(".line"));
        const chars: HTMLElement[] = [];
      
        lines.forEach((line) => {
            const letters = line.textContent?.split("") || [];
            line.innerHTML = letters
                .map((char) => `<span class="montserrat char inline-block opacity-0">${char}</span>`)
                .join("");
            chars.push(...Array.from(line.querySelectorAll<HTMLElement>(".char")));
        });
      
        gsap.fromTo(
            chars,
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.15,
                ease: "power3.out",
            }
        );
    }, []);
      
    return (
        <div className={`h-screen w-full flex flex-row items-start justify-center`}>
            <video autoPlay muted loop className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 filter grayscale brightness-100">
                <source src={Background} type="video/mp4" />
            </video>
            <div className="z-3 h-auto w-full flex flex-row items-center justify-start">
                <div className="flex-1 z-2 flex flex-row items-center justify-start gap-[calc(0.4vw+0.6rem)] p-[calc(0.3vw+0.4rem)]">
                    <img src={Icon} className="h-[calc(2.6vw+2.8rem)] w-[calc(6.4vw+6.6rem)] cursor-pointer" alt="" />
                </div>
                <div className="flex-1 z-2 flex flex-row items-center justify-center p-[calc(0.6vw+1.2rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Work</span>
                    <span className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Services</span>
                    <span className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">About</span>
                    <span className="hovered text-[calc(0.4vw+0.8rem)] font-semibold cursor-pointer">Github</span>
                </div>
                <div className="flex-1 z-2 flex flex-row items-center justify-end p-[calc(0.4vw+0.6rem)]">
                    <span className="px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] 
                        text-[calc(0.4vw+0.6rem)] text-[var(--light-color)] bg-[var(--dark-color)] cursor-pointer font-semibold 
                        hover:bg-[var(--light-color)] hover:text-[var(--dark-color)] transition duration-300 ease-in-out">Let's Talk</span>
                </div>
            </div>
            <div ref={textRef} className="overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-full h-full">
                <span className="line flex flex-row items-center justify-end font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(2.4vw+2.6rem)] text-center cursor-pointer">Where</span>
                <span className="line flex flex-row items-center justify-end font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(2.4vw+2.6rem)] text-center cursor-pointer">Logic</span>
                <span className="line flex flex-row items-center justify-end font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(2.4vw+2.6rem)] text-center cursor-pointer">Meets</span>
                <span className="line flex flex-row items-center justify-end font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(2.4vw+2.6rem)] text-center cursor-pointer">Creativity</span>
            </div>
            <div className={`
                z-2 absolute bottom-0 left-0 w-full p-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-between`}>
                <i className="bx bx-sparkle-square bx-spin-hover hovered text-[calc(0.8vw+1.4rem)] cursor-pointer"></i> 
                <Theme isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </div>
    )
}

export default Header