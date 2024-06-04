import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 
const Design = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles className="-z-10" id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                fpsLimit: 144,
                interactivity: {
                    fullScreen: {
                        zIndex: -10,
                        enable: true,
                    },
                    detect_on: "canvas",
                    events: {
                        onClick:{
                            enable : true,
                            mode: "bubble",
                        },
                        onHover: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse:{
                            distance: 150,
                            duration: 0.2,
                        },
                        grab:{
                            distance: 250,
                            duration: 0.2,
                        }
                    },
                },
                particles: {
                    color: {
                        value: "#4f46e5",
                    },
                    
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1500,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.7,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Design