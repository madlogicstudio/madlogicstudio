
type ShowcaseProps = {
    video: string;
    title: string;
    info: string;
}

function ShowcaseCard({ video, title, info }: ShowcaseProps) {

    return (
        <div className="h-[400px] w-[340px] flex flex-col items-start justify-start cursor-pointer
            p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)] rounded-lg bg-[var(--primary-color)] opacity-[80%]
            hover:scale-103 hover:opacity-[100%] transition duration-300 ease-in-out shadow-2xl">

            <video src={video} autoPlay muted loop className="h-[200px] w-full object-cover rounded-md"></video>

            <div className="flex flex-col items-start justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                <span className="text-[var(--light-color)] montserrat text-[calc(0.4vw+0.8rem)] font-semibold">{title}</span>
                <span className="text-[var(--light-color)] montserrat text-[calc(0.4vw+0.6rem)]">{info}</span>
            </div>
        </div>
    )
}

export default ShowcaseCard
