import ComponentHex from '../components/ComponentHex'
import ComponentBtn from '../components/ComponentBtn'

// GraphSection.js
import React from 'react'
import GraphSection from '../components/GraphSection'

const TopMyPage = () => {
  return (
    <div className="w-full h-[82rem] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-center text-[1rem] text-white font-inter mq1280:block mq1280:gap-[0rem]">
      <GraphSection/>
      <ComponentHex prop="/-48.svg" morning="Morning" />
      <ComponentHex
        componentHexLeft="29.5rem"
        prop="/-48.svg"
        morning="Lunch"
        morningLeft="calc(50% - 29px)"
        morningMinWidth="3.688rem"
      />
      <ComponentHex
        componentHexLeft="42rem"
        prop="/-48.svg"
        morning="Dinner"
        morningLeft="calc(50% - 31px)"
        morningMinWidth="3.938rem"
      />
      <div className="absolute top-[25rem] left-[54.5rem] w-[8.5rem] h-[8.5rem] overflow-hidden text-[1.25rem] mq1280:block mq1280:w-[8.5rem] mq1280:h-[8.5rem] mq1280:gap-[0rem]">
        <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] mq1280:block mq1280:w-[8.5rem] mq1280:h-[8.5rem]" />
        <img
          className="absolute h-[calc(100%_-_2px)] w-[calc(100%_-_20px)] top-[0.063rem] right-[0.625rem] bottom-[0.063rem] left-[0.625rem] max-w-full overflow-hidden max-h-full object-contain mq1280:block mq1280:w-[7.25rem] mq1280:h-[8.375rem]"
          alt=""
          src="/-48.svg"
        />
        <h1 className="m-0 absolute top-[calc(50%_+_16px)] left-[calc(50%_-_29px)] text-inherit leading-[1.5rem] font-normal font-[inherit] inline-block min-w-[3.688rem] mq1280:font-inter mq1280:text-[1.25rem] mq1280:leading-[1.5rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto mq450:text-[1rem] mq450:leading-[1.188rem]">
          Snack
        </h1>
        <img
          className="absolute top-[calc(50%_-_36px)] left-[calc(50%_-_28px)] w-[3.5rem] h-[3.5rem] object-contain mq1280:block mq1280:w-[3.5rem] mq1280:h-[3.5rem]"
          loading="lazy"
          alt=""
          src="/icon-cup@2x.png"
        />
      </div>
      <img
        className="absolute top-[35rem] left-[10rem] w-[60rem] h-[29.75rem] mq1280:block mq1280:w-[60rem] mq1280:h-[29.75rem]"
        alt=""
        src="/-1.svg"
      />
      <ComponentBtn prop="/-88.svg" prop1="記録をもっと見る" />
      <img
        className="absolute top-[46rem] left-[71rem] w-[3rem] h-[3rem] mq1280:block mq1280:w-[3rem] mq1280:h-[3rem]"
        loading="lazy"
        alt=""
        src="/component-scroll.svg"
      />
      <div className="absolute top-[65.688rem] left-[20.563rem] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_rgba(217,_217,_217,_0.1)] w-[30.313rem] h-[5.063rem] hidden mq1280:block" />
      <div className="absolute top-[65.875rem] left-[21.813rem] leading-[1.188rem] font-medium text-black text-left hidden mq1280:block">
        more record
      </div>
    </div>
  );
};

export default TopMyPage;
