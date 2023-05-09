import { Home } from "./components/sections/home";
import { About } from "./components/sections/about";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import luxy from "luxy.js";
import { useEffect, useState } from "react";
import { Awards } from "./components/sections/awards";

function App() {

    // useEffect(() => {
    //     luxy.init({
    //         wrapperSpeed: 0.15
    //     })
    // }, [])
    // const [progress, setProgress] = useState(0);
    // const [ready, setReady] = useState(false);
    // const [dissapear, setDissapear] = useState(false);
    // useEffect(() => {
    //     console.log(progress)
    //     if (progress == 100) {
    //         setReady(true)
    //     }
    // }, [progress])
    // useEffect(() =>{
    //     if(ready){
    //         setTimeout(() => {
    //             document.getElementById('load-screen').style.display = "none"
    //         }, 1000)
    //     }
    // }, [ready])

    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    //   }

    return (
        <>
            {/* {ready === false &&
                <div className="absolute w-screen h-screen z-50 bg-black flex justify-center items-center text-white font-title">{Math.round(progress*10)/10} %</div>
            }
            {ready === true &&
                <div id="load-screen" className="absolute w-screen h-screen z-50">
                    <div className="w-screen h-1/2 bg-black animate-loadingUp"></div>
                    <div className="w-screen h-1/2 bg-black animate-loadingDown"></div>
                </div>
            } */}
            <div className="px-10 lg:px-11 max-w-[1800px] left-0 right-0 m-auto bg-slate-100">
                <Home />
                <Experience />
                <Projects />
                <Awards />
            </div>
        </>
    )
}

export default App;