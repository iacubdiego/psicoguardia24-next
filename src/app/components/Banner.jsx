import React from 'react';
import { useSpring, animated } from 'react-spring';


function Banner() {
  const animationProps = useSpring({
    from: { left: '90%' },
    to: { left: '30%' },
    config: { duration: 2000 },
  });

  return (
    <div className='w-4/5 h-screen p-6 mb-4 mx-auto'>
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('./sillon.png')" }}
    >
      <animated.div
        className="absolute top-6 gap-6 left-4 h-32 w-scren flex items-center justify-center"
        style={animationProps}
      >
        <img src="cruzNeonSF.png" className="h-auto w-[100px] max-w-[30vw] bg-white bg-opacity-10 border-green-500 border-4 rounded-full animate-pulse" />
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-white">24 Horas <br/> Todos los Dias</h1>
      </animated.div>
    </div>
    </div>
  );
}

export default Banner;