import React from 'react';
import { useSpring, animated } from 'react-spring';

function Banner() {
  const animationProps = useSpring({
    from: { left: '90%' },
    to: { left: '30%' },
    config: { duration: 1000 },
  });

  return (
    <div className='w-4/5 h-screen p-6 mb-4 mx-auto'>
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('./sillon.png')" }}
    >
      <animated.div
        className="absolute top-8 left-4 h-32 w-32 flex items-center justify-center"
        style={animationProps}
      >
        <img src="cruzNeonSF.png" className="bg-white bg-opacity-10 border-green-500 border-4 rounded-full animate-pulse" />
      </animated.div>
    </div>
    </div>
  );
}

export default Banner;