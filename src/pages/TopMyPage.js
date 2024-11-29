import ComponentHex from '../components/ComponentHex'
import ComponentBtn from '../components/ComponentBtn'

// GraphSection.js
import React from 'react'
import GraphSection from '../components/GraphSection'
import ImageCard from '../components/ImageCard'

const TopMyPage = () => {
  return (
    <div className="w-full h-[82rem] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-center text-[1rem] text-white font-inter mq1280:block mq1280:gap-[0rem]">
      <GraphSection/>
      <div className="flex justify-center gap-[4rem] mt-[2rem]">
        <ComponentHex img="/-48.svg" morning="Morning"/>
        <ComponentHex
          componentHexLeft="29.5rem"
          img="/-48.svg"
          morning="Lunch"
          morningLeft="calc(50% - 29px)"
          morningMinWidth="3.688rem"
        />
        <ComponentHex
          componentHexLeft="42rem"
          img="/-48.svg"
          morning="Dinner"
          morningLeft="calc(50% - 31px)"
          morningMinWidth="3.938rem"
        />
        <ComponentHex
          componentHexLeft="54.5rem"
          img="/-48.svg"
          morning="Snack"
          morningLeft="calc(50% - 29px)"
          morningMinWidth="3.688rem"
        />
      </div>
      <div className="container mt-[2rem]">
        <div className="mx-auto w-fit grid grid-rows-2 gap-[1rem]" style={{ gridTemplateColumns: 'repeat(4, 234px)' }}>
          <ImageCard src={'/images/top-my-page/1.jpg'} label={'05.21.Morning'} alt={'05.21.Morning'}/>
          <ImageCard src={'/images/top-my-page/2.jpg'} label={'05.21.Lunch'} alt={'05.21.Lunch'}/>
          <ImageCard src={'/images/top-my-page/3.jpg'} label={'05.21.Dinner'} alt={'05.21.Dinner'}/>
          <ImageCard src={'/images/top-my-page/4.jpg'} label={'05.21.Snack'} alt={'05.21.Snack'}/>
          <ImageCard src={'/images/top-my-page/5.jpg'} label={'05.21.Morning'} alt={'05.21.Morning'}/>
          <ImageCard src={'/images/top-my-page/6.jpg'} label={'05.21.Lunch'} alt={'05.21.Lunch'}/>
          <ImageCard src={'/images/top-my-page/7.jpg'} label={'05.21.Dinner'} alt={'05.21.Dinner'}/>
          <ImageCard src={'/images/top-my-page/8.jpg'} label={'05.21.Snack'} alt={'05.21.Snack'}/>
        </div>
      </div>
      <ComponentBtn prop="/-88.svg" prop1="記録をもっと見る"/>
      <img
        className="absolute top-[46rem] left-[71rem] w-[3rem] h-[3rem] mq1280:block mq1280:w-[3rem] mq1280:h-[3rem]"
        loading="lazy"
        alt=""
        src="/component-scroll.svg"
      />
      <div
        className="absolute top-[65.688rem] left-[20.563rem] [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_rgba(217,_217,_217,_0.1)] w-[30.313rem] h-[5.063rem] hidden mq1280:block"/>
      <div
        className="absolute top-[65.875rem] left-[21.813rem] leading-[1.188rem] font-medium text-black text-left hidden mq1280:block">
        more record
      </div>
    </div>
  );
};

export default TopMyPage;
