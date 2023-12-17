import React,{useCallback} from 'react'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import layoutParticles from './LayoutParticles';
import Logo4 from '../../assets/Logo4.png'
export default function Layout() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
  return (
    <>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={layoutParticles}
    />
    <div className='h-screen flex justify-center items-center bg-opacity-5 py-10'>
         <img src={Logo4} alt="..."  className='lg:h-full bg-opacity-5 bg-transparent h-3/4'/>
    </div>
    </>
  )
}

