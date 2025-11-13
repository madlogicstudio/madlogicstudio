
type ImagecardProps = {
    isDark: boolean;
    icon: React.ReactNode;
    title: string;
    info: string;
}

function ImageCard({ isDark, icon, title, info }: ImagecardProps) {

    return (
        <div className={`${isDark? "bg-[var(--dark-color)] text-[var(--secondary-color)]" : "bg-[var(--secondary-color)] text-[var(--light-color)] hover:bg-[var(--primary-color)]"}
            z-4 h-[460px] w-[360px] flex flex-col items-center justify-center cursor-pointer p-[calc(0.4vw+0.6rem)] 
            gap-[calc(0.4vw+0.6rem)] rounded-lg hover:scale-103 transition duration-300 ease-in-out shadow-xl`}>

            <div className={`${isDark? "border-[var(--secondary-color)]" : "border-[var(--light-color)]"}
                h-[200px] w-[200px] flex flex-col items-center justify-center p-[calc(0.3vw+0.4rem)] 
                rounded-full border-4 `}>
                {icon}
            </div>

            <div className="flex flex-col items-start justify-start p-[calc(0.4vw+0.6rem)] gap-[calc(0.4vw+0.6rem)]">
                <span className="spacemono text-[calc(0.4vw+0.9rem)] font-semibold">{title}</span>
                <span className="spacemono text-[calc(0.4vw+0.7rem)]">{info}</span>
            </div>
        </div>
    )
}

export default ImageCard
