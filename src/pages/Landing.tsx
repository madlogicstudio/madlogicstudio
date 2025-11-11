import { useState } from "react"
import Header from "../layouts/Header";
import Content from "./Content";

function Landing() {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className="w-full h-auto flex flex-col items-center justify-start">
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <Content />
        </div>
    )
}

export default Landing