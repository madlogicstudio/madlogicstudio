import { useState } from "react"
import Header from "../layouts/Header";
import About from "../layouts/About";
import Showcase from "../layouts/Showcase";
import Footer from "../layouts/Footer";
import Work from "../layouts/Work";
import Services from "../layouts/Services";

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`${isDark? "bg-[var(--dark-color)]" : "bg-[var(--light-color)]"}
            w-full h-auto flex flex-col items-center justify-start`}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <div className="h-screen"></div>
            <About isDark={isDark}/>
            <Showcase isDark={isDark}/>
            <Work isDark={isDark}/>
            <Services isDark={isDark}/>
            <Footer isDark={isDark}/>   
        </div>
    )
}

export default Landing