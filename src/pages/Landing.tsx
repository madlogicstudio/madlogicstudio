import { useState } from "react"
import Header from "../layouts/Header";
import About from "../layouts/About";
import Showcase from "../layouts/Showcase";
import Footer from "../layouts/Footer";

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col items-center justify-start">
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <div className="h-screen"></div>
            <About isDark={isDark}/>
            <Showcase isDark={isDark}/>
            <Footer isDark={isDark}/>   
        </div>
    )
}

export default Landing