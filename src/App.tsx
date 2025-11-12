import Landing from "./pages/Landing"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

declare global {
  interface Window {
    ScrollSmoother?: any;
  }
}

function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    window.ScrollSmoother = ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });

    return () => {
        window.ScrollSmoother?.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Landing />
      </div>
    </div>
  )
}

export default App