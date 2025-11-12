import Marquee from "react-fast-marquee"
import blazepizza from "../assets/imgs/brands/blaze-pizza.png"
import spotify from "../assets/imgs/brands/spotify.png"
import starbucks from "../assets/imgs/brands/starbucks.png"
import paystack from "../assets/imgs/brands/paystack.png"
import github from "../assets/imgs/brands/github.png"
import vans from "../assets/imgs/brands/vans.png"
import ShowcaseCard from "../components/ShowcaseCard"
import Circles from "../assets/vids/circles.mp4"
import Orbs from "../assets/vids/orbs.mp4"
import Particles from "../assets/vids/particles.mp4"

type ShowcaseProps = {
    isDark: boolean;
}

function Showcase({ isDark }: ShowcaseProps) {

    const handleSkip = () => {
        const section = document.getElementById("footer");
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
        <div id="showcase" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            relative overflow-hidden h-screen w-full flex flex-col items-center justify-start gap-[calc(0.4vw+0.6rem)] pb-[calc(1.4vw+1.6rem)] pt-[calc(0.8vw+1rem)] border-b border-[var(--border-color)]`}>            
            
            <div className="flex flex-row items-center justify-center gap-[calc(0.4vw+0.6rem)]">
                <i className="bx bx-sparkles bx-spin-hover hover:text-[var(--primary-color)] text-[calc(0.6vw+1.2rem)] cursor-pointer"></i> 
                <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-extrabold cursor-pointer">Trusted By</span>
                <i className="bx bx-sparkles bx-spin-hover hover:text-[var(--primary-color)] text-[calc(0.6vw+1.2rem)] cursor-pointer"></i> 
            </div>

            <div className={`${isDark? "bg-[var(--border-color)]" : "bg-[var(--light-color)]"}
                fade-marquee`}>
                <Marquee pauseOnHover={true}>
                    <div className="h-auto w-full flex flex-row items-center justify-around gap-[calc(1.8vw+2.4rem)]">
                        <img title="Visit Blaze Pizza" src={blazepizza} className="h-[calc(2.4vw+2.6rem)] w-[calc(6.4vw+6.6rem)] cursor-pointer" alt="" />
                        <img title="Visit Spotify" src={spotify} className="h-[calc(2.4vw+2.6rem)] w-[calc(5vw+5.2rem)] cursor-pointer" alt="" />
                        <img title="Visit Starbucks" src={starbucks} className="h-[calc(1.4vw+1.6rem)] w-[calc(6vw+6.6rem)] cursor-pointer" alt="" />
                        <img title="Visit Paystack" src={paystack} className="h-[calc(2.4vw+2.6rem)] w-[calc(5vw+5.2rem)] cursor-pointer" alt="" />
                        <img title="Visit Github" src={github} className="h-[calc(0.8vw+1rem)] w-[calc(4.6vw+4.8rem)] cursor-pointer" alt="" />
                        <img title="Visit Vans" src={vans} className="h-[calc(1.4vw+1.6rem)] w-[calc(4vw+4.2rem)] cursor-pointer" alt="" />
                    </div>
                </Marquee>
            </div>

            <div className="flex flex-row items-center justify-center gap-[calc(0.4vw+0.6rem)]">
                <ShowcaseCard 
                    video={Orbs} 
                    title="Powered By Technology" 
                    info="Our work, processes, and solutions are driven and made possible by technological tools and innovations." 
                />
                <ShowcaseCard 
                    video={Circles} 
                    title="Driven By Creativity" 
                    info="We are motivated and guided primarily by imagination, original ideas, and the desire to innovate or create something new." 
                />
                <ShowcaseCard 
                    video={Particles} 
                    title="Madness Into Brilliance"  
                    info="We take chaotic, unconventional, or wild ideas and transform them into something exceptional, polished, and innovative." 
                />
            </div>

            <div className={`z-2 absolute bottom-0 left-0 w-full p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-between`}>
                <div className="gap-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-start">
                    <i title="Skip Page" className="bx bx-sparkle-square bx-spin-hover hover:text-[var(--primary-color)] text-[calc(0.8vw+1.4rem)] cursor-pointer"
                    onClick={handleSkip}></i> 
                    <span className="spacemono font-bold text-[calc(0.4vw+0.77rem)]">Skip Page</span>
                </div>
                <div className="gap-[calc(0.4vw+0.6rem)] flex flex-row items-center justify-start">
                    <span className="spacemono font-bold text-[calc(0.4vw+0.7rem)]">Talk to Us</span>
                    <i title="Lets Talk" className="bx bx-megaphone-alt bx-tada-hover hover:text-[var(--primary-color)] text-[calc(0.8vw+1.4rem)] 
                        cursor-pointer"></i> 
                </div>
            </div>
        </div>
    )
}

export default Showcase