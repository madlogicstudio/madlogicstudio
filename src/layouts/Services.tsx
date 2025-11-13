import ImageCard from "../components/ImageCard"
import Madness from "../assets/vids/madness.mp4"

type ServicesProps = {
    isDark: boolean;
}

function Services({ isDark }: ServicesProps) {
    return (
        <div id="services" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            overflow-hidden h-screen w-full flex flex-col items-center justify-start gap-[calc(0.4vw+0.6rem)]`}>
            
            <div className="w-[90%] flex flex-row items-center justify-center pt-[calc(0.8vw+1.2rem)]">
                <div className="flex flex-row items-center justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">We offer</span>
                    <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.8rem)] bg-[var(--primary-color)] 
                            text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] -rotate-3 hover:rotate-3
                            transition duration-300 ease-in-out cursor-pointer">Affordable</span>
                </div>
                <div className="flex-row items-start justify-start pl-0 p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">but high performance solutions.</span> 
                </div>
            </div>

            <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden">
                <video src={Madness} autoPlay muted loop className="h-inherit w-full object-cover cursor-pointer brightness-80"></video>
                <div className="h-auto w-full flex flex-row items-center justify-center gap-[calc(0.4vw+0.6rem)] absolute top-1/2 -translate-y-1/2">
                    <ImageCard
                        isDark={isDark}
                        icon={
                            <i title="Design" className="bx bx-blocks bx-tada-hover primary text-[calc(3.4vw+3.6rem)] brightness-80 cursor-pointer"></i> 
                        }
                        title="Website Design"
                        info="We create website designs that combine creativity, usability, and performance."
                    />
                    <ImageCard 
                        isDark={isDark}
                        icon={
                            <i title="Web Development" className="bx bx-desktop bx-tada-hover primary text-[calc(3.4vw+3.6rem)] brightness-80 cursor-pointer"></i> 
                        }
                        title="Website Development"
                        info="We create website designs that combine creativity, usability, and performance."
                    />
                    <ImageCard 
                        isDark={isDark}
                        icon={
                            <i title="App Development" className="bx bx-mobile bx-tada-hover primary text-[calc(3.4vw+3.6rem)] brightness-80 cursor-pointer"></i> 
                        }
                        title="App Development"
                        info="We create website designs that combine creativity, usability, and performance."
                    />
                </div>
            </div>

        </div>
    )
}

export default Services