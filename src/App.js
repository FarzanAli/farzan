import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import luxy from "luxy.js";
import { useEffect } from "react";
import { Awards } from "./components/sections/awards";

function App() {

    useEffect(() => {
        luxy.init({
            wrapperSpeed: 0.15
        })
    }, [])

    return (
        <div className="px-10 lg:px-11 max-w-[1800px] left-0 right-0 m-auto bg-slate-50" id="luxy">
            <Home />
            <Experience />
            <Projects />
            <Awards />
        </div>
    )
}

export default App;