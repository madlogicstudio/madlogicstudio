import ImageCard from "../components/ImageCard"
import Madness from "../assets/vids/madness.mp4"
import Design from "../assets/vids/design.mp4"
import Desktop from "../assets/vids/desktop.mp4"
import Mobile from "../assets/vids/mobile.mp4"
import useIsMobile from "../hooks/useIsMobile"

type ServicesProps = {
    isDark: boolean;
}

function Services({ isDark }: ServicesProps) {

    const isMobile = useIsMobile();

    return (
        <div id="services" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            ${isMobile? "h-auto" : "h-screen"}
            overflow-hidden w-full flex flex-col items-center justify-start gap-[calc(0.4vw+0.6rem)]`}>
            
            <div className={`${isMobile? "flex-col" : "flex-row"}
                w-[90%] flex items-center justify-center pt-[calc(0.8vw+1.2rem)]`}>
                <div className={`
                    flex items-center justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">We offer</span>
                    <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.8rem)] bg-[var(--primary-color)] 
                            text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] -rotate-3 hover:rotate-3
                            transition duration-300 ease-in-out cursor-pointer">Affordable</span>
                </div>
                <div className={`${isMobile? "flex-col pb-[calc(0.4vw+0.6rem)]" : "pl-0 p-[calc(0.4vw+0.6rem)]"}
                    flex-row items-start justify-start pl-0 p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">but high performance solutions.</span> 
                </div>
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
                {!isMobile && <video src={Madness} autoPlay muted loop className={`
                    ${isMobile? "h-auto" : "h-inherit object-cover"}
                    w-full cursor-pointer brightness-80`}></video>}
                <div className={`${isMobile? "flex-col" : "flex-row absolute top-1/2 -translate-y-1/2"}
                    h-auto w-full flex items-center justify-center gap-[calc(0.4vw+0.6rem)]`}>
                    <ImageCard
                        isDark={isDark}
                        video={Design}
                        title="Website Design"
                        info="We create website designs that combine creativity, usability, and performance."
                    />
                    <ImageCard 
                        isDark={isDark}
                        video={Mobile}
                        title="App Development"
                        info="We develop apps that transform ideas into powerful digital products, combining elegant design with cutting-edge technology."
                    />
                    <ImageCard 
                        isDark={isDark}
                        video={Desktop}
                        title="Website Development"
                        info="We develop websites that turn visitors into customers through stunning design and seamless user experience"
                    />
                </div>
            </div>

        </div>
    )
}

export default Services