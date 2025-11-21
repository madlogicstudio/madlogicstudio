import Marquee from "react-fast-marquee"
import blazepizza from "../assets/imgs/brands/blaze-pizza.png"
import spotify from "../assets/imgs/brands/spotify.png"
import starbucks from "../assets/imgs/brands/starbucks.png"
import paystack from "../assets/imgs/brands/paystack.png"
import github from "../assets/imgs/brands/github.png"
import vans from "../assets/imgs/brands/vans.png"
import Brands from "../components/Brands"
import useIsMobile from "../hooks/useIsMobile"

type WorkProps = {
    isDark: boolean;
}

function Work({ isDark }: WorkProps) {

    const isMobile = useIsMobile();

    return (
        <div id="work" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            relative overflow-hidden h-screen w-full flex flex-col items-center justify-start gap-[calc(0.4vw+0.6rem)] pb-[calc(1.4vw+1.6rem)] pt-[calc(0.8vw+1rem)]`}>
            
            <div className={`${isMobile? "flex-col" : "flex-row"}
                w-[90%] flex items-center justify-center pt-[calc(0.8vw+1.2rem)] pb-[calc(0.4vw+0.6rem)]`}>
                <div className={`flex flex-row items-center justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">We are</span>
                    <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.8rem)] bg-[var(--primary-color)] 
                            text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] -rotate-3 hover:rotate-3
                            transition duration-300 ease-in-out cursor-pointer">Trusted</span>
                </div>
                <div className={`${isMobile? "flex-col pb-[calc(0.4vw+0.6rem)]" : "pl-0 p-[calc(0.4vw+0.6rem)]"}
                    flex-row items-start justify-start pl-0 p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">by different companies across the globe.</span> 
                </div>
            </div>

            <div className={`${isDark? "bg-[var(--border-color)]" : "bg-[var(--light-color)]"}
                ${isMobile? "flex-1 flex items-center fade-marquee" : "fade-marquee"}`}>
                <Marquee pauseOnHover={true}>
                    <div className={`${isMobile? "gap-[calc(0.4vw+0.6rem)]" : "gap-[calc(1.8vw+2.4rem)]"}
                        h-auto w-full flex items-center justify-around`}>
                        <img title="Visit Blaze Pizza" src={blazepizza} className="h-[calc(2.4vw+2.6rem)] w-[calc(6.4vw+6.6rem)] cursor-pointer" alt="" />
                        <img title="Visit Spotify" src={spotify} className="h-[calc(2.4vw+2.6rem)] w-[calc(5vw+5.2rem)] cursor-pointer" alt="" />
                        <img title="Visit Starbucks" src={starbucks} className="h-[calc(1.4vw+1.6rem)] w-[calc(6vw+6.6rem)] cursor-pointer" alt="" />
                        <img title="Visit Paystack" src={paystack} className="h-[calc(2.4vw+2.6rem)] w-[calc(5vw+5.2rem)] cursor-pointer" alt="" />
                        <img title="Visit Github" src={github} className="h-[calc(0.8vw+1rem)] w-[calc(4.6vw+4.8rem)] cursor-pointer" alt="" />
                        <img title="Visit Vans" src={vans} className={`${isMobile? "mr-[calc(0.4vw+0.6rem)]" : ""}
                            h-[calc(1.4vw+1.6rem)] w-[calc(4vw+4.2rem)] cursor-pointer`} alt="" />
                    </div>
                </Marquee>
            </div>

            {!isMobile && <div className={`${isMobile? "flex-col" : "flex-row"}
                flex-1 w-[90%] shadow-xl rounded-lg flex items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                
                <div className="flex-1 flex flex-col items-start justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">           
                    <div className="w-full flex flex-row items-center justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                        <span className="spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold">Our team</span>
                        <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.7rem)] bg-[var(--primary-color)] 
                            text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] rotate-3 hover:-rotate-3
                            transition duration-300 ease-in-out cursor-pointer">Specialized</span>
                    </div>
                    <span className="spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold">— in creating interactive web and app designs, interfaces, and applications.</span> 
                </div>

                <Brands isDark={isDark}/>
            </div>}
            {isMobile && <div className={`${isMobile? "flex-col" : "flex-row"}
                flex-1 w-[90%] shadow-xl rounded-lg flex items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                
                <Brands isDark={isDark}/>

                <div className="flex-1 flex flex-col items-start justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">           
                    <div className={`${isMobile? "justify-center" : "justify-start"}
                        w-full flex flex-row items-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                        <span className="spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold">Our team</span>
                        <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.7rem)] bg-[var(--primary-color)] 
                            text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] rotate-3 hover:-rotate-3
                            transition duration-300 ease-in-out cursor-pointer">Specialized</span>
                    </div>
                    <span className={`${isMobile? "text-center" : ""}
                        spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold`}>— in creating interactive web and app designs, interfaces, and applications.</span> 
                </div>

            </div>}

        </div>
    )
}

export default Work