import useIsMobile from "../hooks/useIsMobile"

type ShowcaseProps = {
    video: string;
    title: string;
    info: string;
}

function ShowcaseCard({ video, title, info }: ShowcaseProps) {

    const isMobile = useIsMobile();

    return (
        <div className={`${isMobile? "h-auto w-full" : "h-[460px] w-[360px]"}
            flex flex-col items-start justify-start cursor-pointer
            p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)] rounded-lg bg-[var(--primary-color)] opacity-[80%]
            hover:scale-103 hover:opacity-[100%] transition duration-300 ease-in-out shadow-xl`}>

            <video src={video} autoPlay muted loop className="h-[200px] w-full object-cover rounded-md"></video>

            <div className="flex flex-col items-center justify-center p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                <span className="text-[var(--light-color)] spacemono text-[calc(0.4vw+0.9rem)] font-semibold text-center">{title}</span>
                <span className="text-[var(--light-color)] spacemono text-[calc(0.4vw+0.7rem)] text-center">{info}</span>
            </div>
        </div>
    )
}

export default ShowcaseCard
