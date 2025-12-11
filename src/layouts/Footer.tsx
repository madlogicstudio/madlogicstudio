import Banner from "../assets/ui/banner.png"
import useIsMobile from "../hooks/useIsMobile";

type FooterProps = {
    isDark: boolean;
}

function Footer({ isDark }: FooterProps) {

    const isMobile = useIsMobile();

    const scrollToTop = () => {
        const section = document.getElementById("header");
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
        <div id="footer" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            ${isMobile? "pt-[calc(0.4vw+0.6rem)] h-auto" : "h-screen"}
            relative overflow-hidden w-full flex flex-col items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
            <div className="h-full w-full flex flex-col items-start justify-start">
                <div className={`${isMobile? "py-[calc(1.4vw+1.6rem)]" : ""}
                    bg-[var(--light-color)] flex-1 w-full flex flex-row items-center justify-center`}>
                    <img title="Mad Logic Studio" src={Banner} alt="" className="h-[calc(6.6vw+6.8rem)] w-[calc(14.6vw+14.8rem)] cursor-pointer" />
                </div>

                <div className={`${isMobile? "flex-col" : "flex-row"}
                    flex-1 h-full w-full flex items-center justify-start pt-[calc(0.4vw+0.6rem)]`}>
                    <div className={`${isMobile? "flex-col" : "flex-col"}
                        flex-1 h-full w-full gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)] flex items-start justify-start`}>
                        <span className={`${isDark? "text-[var(--light-color)]" : "text-[var(--dark-color)]"} 
                            ${isMobile? "w-full text-center text-[calc(0.6vw+1rem)]" : "text-[calc(0.6vw+0.8rem)]"}
                            spacegrotesk font-semibold`}>Follow our socials</span>
                        <div className={`${isMobile? "w-full" : ""}
                            flex flex-row items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
                            <i className='bxl bx-facebook bx-tada-hover text-[calc(0.8vw+1.6rem)] cursor-pointer primary'></i>
                            <i className='bxl bx-github bx-tada-hover text-[calc(0.8vw+1.6rem)] cursor-pointer primary'></i> 
                            <i className='bxl bx-instagram bx-tada-hover text-[calc(0.8vw+1.6rem)] cursor-pointer primary'></i>
                            <i className='bxl bx-twitter-x bx-tada-hover text-[calc(0.8vw+1.6rem)] cursor-pointer primary'></i>
                        </div>
                        <span className={`${isMobile? "w-full text-justify text-[calc(0.6vw+0.8rem)]" : "text-[calc(0.8vw+0.4rem)]"}`}>
                            Mad Logic Studio is a modern web and app development company turning bold ideas into exceptional digital products. 
                            We combine smart strategy, creative problem-solving, and cutting-edge technology to build fast, scalable, and beautifully designed solutions. 
                            Our team values clean code, user-focused design, and a touch of “mad” innovation in everything we do. 
                            Whether you’re a growing startup or an established brand, we’re here to bring your vision to life with clarity and precision.
                        </span>
                    </div>
                    
                    <div className="flex-1 h-full w-full gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)] flex flex-col items-start justify-between">
                        <div className="flex flex-col items-start justify-start gap-[calc(0.4vw+0.6rem)] text-[calc(0.4vw+0.7rem)]">
                            <span className={`${isDark? "text-[var(--light-color)]" : "text-[var(--dark-color)]"} 
                                ${isMobile? "w-full text-center text-[calc(0.6vw+1rem)]" : "text-[calc(0.6vw+0.8rem)]"}
                                spacegrotesk font-semibold`}>Subscribe to our newsletter</span>
                            <div className="relative h-auto w-full flex flex-start items-start justify-start">
                                <input type="email" placeholder="What's your email?" 
                                    className={`${isDark? "" : "border border-[var(--border-color)]"}
                                    px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] w-full outline-none text-[var(--dark-color)]
                                    text-[calc(0.4vw+0.7rem)] placeholder:text-[calc(0.4vw+0.7rem)] bg-[var(--light-color)]`} />
                                <span className="absolute top-0 right-0 h-full flex items-center cursor-pointer px-[calc(0.4vw+0.6rem)] spacegrotesk text-[calc(0.4vw+0.7rem)] 
                                py-[calc(0.3vw+0.4rem)] bg-[var(--primary-color)] text-[var(--light-color)]
                                hover:bg-[var(--secondary-color)] transition duration-300 ease-in-out">Subscribe</span>
                            </div>
                            <div className={`${isMobile? "text-[calc(0.6vw+0.8rem)]" : "text-[calc(0.8vw+0.4rem)]"}
                                w-auto flex flex-row items-center justify-start gap-[calc(0.1vw+0.2rem)] flex-wrap`}>
                                <span>By entering your email, you agree to our</span>
                                <u className="cursor-pointer primary">Terms & Conditions </u>
                                <span>and</span>
                                <u className="cursor-pointer primary">Privacy Policy.</u>
                            </div>
                        </div>
                        <div className={`${isMobile? "text-[calc(0.6vw+0.8rem)]" : "text-[calc(0.8vw+0.4rem)]"}
                            w-full flex flex-row items-center justify-between mb-1`}>
                            <span className="cursor-pointer primary">© Mad Logic Studio. All rights reserved.</span>
                            <i className='bx bx-chevron-up-square bx-spin-hover text-[calc(1vw+1.6rem)] cursor-pointer primary'
                                onClick={scrollToTop}></i> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer