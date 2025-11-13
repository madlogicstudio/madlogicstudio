
type BrandsProps = {
    isDark: boolean;
}

function Brands({ isDark }: BrandsProps) {
    return (
        <div className={`${isDark? "text-[var(--light-color)]" : "text-[var(--dark-color)]"}
        flex-1 h-auto w-full flex flex-row items-center justify-center flex-wrap gap-[calc(0.4vw+0.6rem)]`}>
            <div className={`${isDark? "text-[var(--secondary-color)]" : "text-[var(--secondary-color)]"}
                    h-full flex flex-row items-center justify-center flex-wrap`}>
                <i title="Git" className="bxl bx-git bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Github" className="bxl bx-github bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="React" className="bxl bx-react bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Vite" className="bxl bx-vite-js bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Nextjs" className="bxl bx-next-js bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Vue" className="bxl bx-vuejs bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Javascript" className="bxl bx-javascript bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Typescript" className="bxl bx-typescript bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i>
                <i title="Tailwindcss" className="bxl bx-tailwind-css bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i>  
                <i title="Expo" className="bxl bx-expo bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Firebase" className="bxl bx-firebase bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
                <i title="Gsap" className="bxl bx-gsap bx-bounce-hover primary text-[calc(1.8vw+2.4rem)] p-[calc(0.4vw+0.6rem)] cursor-pointer"></i> 
            </div>
        </div>
    ) 
}

export default Brands