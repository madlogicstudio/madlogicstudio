import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Icon from "../assets/ui/logo-light.png"
import useIsMobile from "../hooks/useIsMobile";

function Tagline() {

    const isMobile = useIsMobile();
    gsap.registerPlugin(SplitText);

    const whereRef = useRef<HTMLHeadingElement>(null);
    const logicRef = useRef<HTMLHeadingElement>(null);
    const meetsRef = useRef<HTMLHeadingElement>(null);
    const creativityRef = useRef<HTMLHeadingElement>(null);
    const logicImgRef = useRef<HTMLImageElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if(!whereRef.current) return;

        const tl = gsap.timeline({ delay: 0.5 });

        gsap.set(whereRef.current, {
            color: "#141619",
            backgroundColor: "transparent",
            y: -30,
            opacity: 0
        });

        tl.to(whereRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            color: "#F5E5E1",
            backgroundColor: "#1A3D64",
            ease: "power2.inOut"
        });   
    }, []);

    useEffect(() => {
        if(!logicRef.current) return;

        const tl = gsap.timeline({ delay: 1 });

        gsap.set(logicRef.current, {
            opacity: 0,
            y: 30
        });

        tl.to(logicRef.current, {
            duration: 1,
            opacity: 1,
            y: 0,
            color: "#141619",
            backgroundColor: "transparent",
            ease: "power2.inOut"
        });   
    }, []);

    useEffect(() => {
        if(!meetsRef) return;

        const split = new SplitText(meetsRef.current, {type: "chars"});
        const tl = gsap.timeline({ delay: 1.5 });

        tl.from(split.chars, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.05,
            ease: "back.out(1.7)"
        });

    }, []); 

    useEffect(() => {
        if(!creativityRef.current) return;

        const tl = gsap.timeline({ delay: 2 });

        gsap.set(creativityRef.current, {
            color: "#B3B4BD",
            width: "0%",
            opacity: 0
        });

        tl.to(creativityRef.current, {
            width: "100%",
            opacity: 1,
            duration: 1,
            color: "#141619",
            ease: "power2.inOut"
        });   
    }, []);

    const doNothing = () => {
        if(!whereRef.current || !logicRef || !meetsRef || !creativityRef) return;

        gsap.to(whereRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.to(logicRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.to(meetsRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        gsap.to(creativityRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    }

    const goDown = () => {
        if(!whereRef.current) return;

        gsap.to(whereRef.current, {
            y: 20,
            duration: 0.5,
            ease: "power2.out"
        });
    }
    const goUp = () => {
        if(!meetsRef.current) return;

        gsap.to(meetsRef.current, {
            y: -20,
            duration: 0.5,
            ease: "power2.out"
        });
    }

    const showIcon = () => {
        if(!logicRef.current || !logicImgRef) return;

        const tl = gsap.timeline();

        tl.to(logicRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.inOut"
        });

        tl.to(logicImgRef.current, {
            scaleX: -1,
            opacity: 1,
            y: 0, 
            duration: 0.5,
            ease: "power2.inOut"
        }, "-=0.3");
    }
    const hideIcon = () => {
        if(!logicRef.current || !logicImgRef) return;

        const tl = gsap.timeline();

        tl.to(logicRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });

        tl.to(logicImgRef.current, {
            scaleX: 0,
            opacity: 0,
            y: 0, 
            duration: 0.5,
            ease: "power2.inOut"
        }, "-=0.3");
    }

    const creativityHover = () => {
        if(!creativityRef.current || hasAnimated.current) return;

        const split = new SplitText(creativityRef.current, {type: "chars"});
        const tl = gsap.timeline();

        gsap.set(split.chars, {
            display: "inline-block", 
            fontFamily: "spacemono, monospace", 
            fontWeight: "900",         
            fontSize: "inherit",     
            lineHeight: "inherit",     
            color: "inherit"          
        });

        tl.from(split.chars, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });

        hasAnimated.current = true; 
    }

    const creativityLeave = () => {
        hasAnimated.current = false; 
    }

    return (     
        <div className="overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 flex items-center justify-center w-full h-full">
            <div className={`${isMobile? "flex-col" : "flex-row"}
                relative w-auto w-auto flex items-center justify-center z-2`}>
                <span ref={whereRef} className="flex flex-row items-center justify-end montserrat font-bold px-[calc(0.4vw+0.6rem)] py-[calc(0.3vw+0.4rem)]
                    text-[calc(1.6vw+2rem)] text-center cursor-pointer"
                    onMouseOver={goDown}
                    onMouseLeave={doNothing}>Where</span>
                {!isMobile && <span ref={logicRef} className="flex flex-row items-center justify-end spacegrotesk font-[900] p-[calc(0.4vw+0.6rem)]
                    text-[calc(1.8vw+2.4rem)] text-center cursor-pointer"
                    onMouseEnter={showIcon}
                    onMouseLeave={hideIcon}>Logic</span>}
                {isMobile && <span ref={logicRef} className="flex flex-row items-center justify-end spacegrotesk font-[900] p-[calc(0.4vw+0.6rem)]
                    text-[calc(1.8vw+2.4rem)] text-center cursor-pointer">Logic</span>}
                <img 
                    ref={logicImgRef} 
                    src={Icon}
                    alt="Logic Icon" 
                    className="absolute opacity-0 ml-[-360px] w-[calc(6.4vw+6.8rem)] h-[calc(6.4vw+6.8rem)] cursor-pointer"
                />
                <span ref={meetsRef} className="flex flex-row items-center justify-end montserrat font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(1.8vw+2.4rem)] text-center cursor-pointer text-[#1A3D64]"
                    onMouseOver={goUp}
                    onMouseLeave={doNothing}>Meets</span>
                <span ref={creativityRef} className="flex flex-row items-center justify-start spacemono font-extrabold p-[calc(0.4vw+0.6rem)]
                    text-[calc(1.8vw+2.4rem)] cursor-pointer max-w-[410px] pb-[0]"
                    onMouseOver={creativityHover}
                    onMouseLeave={creativityLeave}>Creativity</span>
            </div>
        </div>
    )
}

export default Tagline