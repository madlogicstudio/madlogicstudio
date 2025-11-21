import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

type ImagecardProps = {
    isDark: boolean;
    video: string;
    title: string;
    info: string;
}

function ImageCard({ isDark, video, title, info }: ImagecardProps) {

    const isMobile = useIsMobile();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--secondary-color)]" : "bg-[var(--secondary-color)] text-[var(--light-color)]"}
            ${isMobile? "h-auto w-[300px]" : "w-[360px]"}
            z-4 h-auto flex flex-col items-center justify-start cursor-pointer p-[calc(0.4vw+0.6rem)] 
            gap-[calc(0.4vw+0.6rem)] rounded-lg hover:scale-103 transition duration-300 ease-in-out shadow-xl`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <video src={video} autoPlay muted loop className={`${isMobile? "h-full w-full" : "h-[200px] w-full"}
                object-cover rounded-md`}></video>

            <div className="flex flex-col items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)">
                <span className="spacemono text-[calc(0.4vw+0.9rem)] font-semibold">{title}</span>
                {isHovered && <span className="spacemono text-[calc(0.4vw+0.7rem)] text-center">{info}</span>}
            </div>
        </div>
    )
}

export default ImageCard
