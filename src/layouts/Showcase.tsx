import ShowcaseCard from "../components/ShowcaseCard"
import Circles from "../assets/vids/circles.mp4"
import Orbs from "../assets/vids/orbs.mp4"
import Logic from "../assets/vids/logic.mp4"
import useIsMobile from "../hooks/useIsMobile"

type ShowcaseProps = {
    isDark: boolean;
}

function Showcase({ isDark }: ShowcaseProps) {

    const isMobile = useIsMobile();

    return (
        <div id="showcase" className={`${isDark? "bg-[var(--dark-color)] text-[var(--light-color)]" : "bg-[var(--light-color)] bg-[var(--dark-color)]"}
            ${isMobile? "h-auto" : "h-screen"}
            relative overflow-hidden w-full flex flex-col items-center justify-center`}>            

            <div className="w-[90%] rounded-lg shadow-xl flex flex-col items-center justify-center p-[calc(0.4vw+0.6rem)]">
                <div className={`${isMobile? "flex-col" : "flex-row"}
                    flex items-center justify-center flex-wrap`}>
                    <div className={`
                        flex items-center justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]`}>
                        <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">Designing for</span>
                        <span className="flex no-wrap spacegrotesk text-[calc(0.6vw+0.8rem)] bg-[var(--primary-color)] 
                                text-[var(--light-color)] px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)] rotate-3 hover:-rotate-3
                                transition duration-300 ease-in-out cursor-pointer">Seamless</span>
                    </div>
                    <div className={`${isMobile? "flex-col pb-[calc(0.4vw+0.6rem)]" : "pl-0 p-[calc(0.4vw+0.6rem)]"}
                        flex-row items-start justify-start  gap-[calc(0.4vw+0.6rem)]`}>
                        <span className="spacegrotesk text-[calc(0.6vw+0.8rem)] font-semibold">and enjoyable interactions.</span> 
                    </div>
                </div>

                <div className={`${isMobile? "flex-col" : "flex-row"}
                    flex items-center justify-center gap-[calc(0.4vw+0.6rem)] p-[calc(0.4vw+0.6rem)]`}>
                    <ShowcaseCard 
                        video={Orbs} 
                        title="Powered By Technology" 
                        info="Our work, processes, and solutions are driven and made possible by technological tools and innovations." 
                    />
                    <ShowcaseCard 
                        video={Logic} 
                        title="Driven By Creativity" 
                        info="We are motivated and guided primarily by imagination, original ideas, and the desire to innovate or create something new." 
                    />
                    <ShowcaseCard 
                        video={Circles} 
                        title="Madness Into Brilliance"  
                        info="We take chaotic, unconventional, or wild ideas and transform them into something exceptional, polished, and innovative." 
                    />
                </div>
            </div>

        </div>
    )
}

export default Showcase