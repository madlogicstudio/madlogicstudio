import Square from "../assets/vids/square.mp4"

type AboutProps = {
    isDark: boolean;
}

function About({ isDark }: AboutProps) {
    
    return (
        <div id="about" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            relative overflow-hidden h-screen w-full flex flex-col items-center justify-start gap-[calc(0.4vw+0.6rem)] pt-[calc(0.8vw+1rem)]`}>            

            <div className="w-[90%] flex flex-col items-start justify-start shadow-xl p-[calc(0.4vw+0.6rem)] rounded-lg">
                <div className="w-full flex flex-row items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className="spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold">
                        At 
                    </span>
                    <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.7rem)] bg-[var(--primary-color)] 
                        text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] -rotate-2 hover:rotate-2 
                        transition duration-300 ease-in-out cursor-pointer">
                        Mad Logic Studio,
                    </span>
                    <i className="bx bx-heart spin ml-auto text-[calc(0.8vw+1.4rem)] p-[calc(0.2vw+0.3rem)] cursor-pointer
                        hover:text-[var(--light-color)] hover:bg-[var(--primary-color)] rounded-full transition duration-300 ease-in-out"></i> 
                </div>
                <div className="flex flex-row items-start justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                    <span className="spacegrotesk text-[calc(0.6vw+0.7rem)] font-semibold">
                        — we turn bold ideas into powerful digital experiences. As a creative web and app development team, we specialize in crafting innovative, user-focused solutions that help businesses grow and stand out in the digital world.
                    </span>
                </div>
            </div>

            <div className={`relative ${isDark? "bg-[#000000]" : "bg-[#DECEB3]"}
                h-full w-full flex flex-col items-center justify-center overflow-hidden`}>
                <video src={Square} autoPlay muted loop className="h-inherit w-auto object-cover transform cursor-pointer
                    absolute top-1/2 -translate-y-1/2 filter hue-rotate-[312deg] saturate-[0.3] brightness-[1.6]"></video>
                <span className="z-3 w-full spacegrotesk p-[calc(0.4vw+0.6rem)] text-[calc(0.6vw+1rem)] text-[var(--light-color)] bg-[var(--secondary-color)] font-semibold 
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer">we bring logic to life through inspired innovation.</span>
            </div>

        </div>
    )
}

export default About