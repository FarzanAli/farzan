import { Home } from "./sections/home";
import { About } from "./sections/about";
import { Experience } from "./sections/experience";
import { Projects } from "./sections/projects";
import luxy from "luxy.js";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        luxy.init()
    }, [])

    return (
        <div className="px-11" id="luxy">
            <Home />
            <About />
            <Experience />
            <Projects />
        </div>
    )
}

export default App;