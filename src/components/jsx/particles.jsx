import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 

export const MyParticles = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
      <>
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
            color: {
                value: "#12151C", 
            },
        },
        fullScreen: {
            enable: true,
            zIndex:-1
          },
        fpsLimit: 60, 

        particles: {
            color: {
                value: "#fff",
            },
            move: {
                direction: "none", 
                enable: false,
                outModes: {
                    default: "out", 
                },
                random: true, 
                speed: .5, 
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800, 
                },
                value: 100, 
            },
            opacity: {
                value: 1 
            },
            shape: {
                type: "circle", 
            },
            size: {
                value: 3, 
                random: {
                    enable: true,
                    minimumValue: 1, 
                },
            },
        },
        
    }}
/>

      
      </>
        
    );
};
export default MyParticles;