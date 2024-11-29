import FrameComponent3 from "../components/FrameComponent3";
import ComponentBtn from "../components/ComponentBtn";
import Footer from "../components/Footer";

const Announcement = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start gap-[3.5rem] leading-[normal] tracking-[normal] mq640:gap-[1.75rem]">
      <FrameComponent3 />
      <section className="w-[76rem] flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[0.5rem] box-border max-w-full">
        <div className="h-[34rem] w-[64rem] relative max-w-full">
          <img
            className="absolute top-[0rem] left-[0rem] w-[60rem] h-[29rem]"
            loading="lazy"
            alt=""
            src="/-5.svg"
          />
          <ComponentBtn
            componentBtnPosition="absolute"
            componentBtnTop="30.5rem"
            componentBtnLeft="20.75rem"
            componentBtnWidth="18.5rem"
            componentBtnAlignSelf="unset"
            componentBtnFlex="unset"
            prop="/-88.svg"
            prop1="コラムをもっと見る"
            h1Width="calc(100% - 7px)"
            h1Height="1.625rem"
            h1Margin="unset"
            h1FontWeight="unset"
          />
          <img
            className="absolute top-[26rem] left-[61rem] w-[3rem] h-[3rem]"
            loading="lazy"
            alt=""
            src="/component-scroll.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Announcement;
