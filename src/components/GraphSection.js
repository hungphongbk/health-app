import React from 'react';
import MainGraph from "./MainGraph";

const GraphSection = () => {
  return (
    <section className="relative w-full bg-darkslategray-200">
      <div className="w-full h-80 flex">
        <div className="w-2/5 flex flex-col items-center justify-center relative">
          <img
            aria-label={'graph'}
            className="w-full h-full object-cover"
            alt=""
            src="/main-photo@2x.png"
          />
          <div className="flex flex-col justify-center absolute
          top-0 left-0 right-0 bottom-0
          " aria-label={'stat'}>
            <div className="text-center text-xl" style={{ textShadow: '0 0 6px #fc7400' }}>
              05/21
            </div>
            <div className="text-center text-2xl" style={{ textShadow: '0 0 6px #fca500' }}>
              75%
            </div>
            <img
              className="absolute-center h-1/2 aspect-square object-cover"
              loading="lazy"
              alt=""
              src="/-50.svg"
            />
          </div>
        </div>
        <div className="w-3/5 flex items-center justify-center">
          <MainGraph />
        </div>
      </div>
    </section>
  );
};

export default GraphSection;