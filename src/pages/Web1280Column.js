import FrameComponent3 from "../components/FrameComponent3";
import ComponentBtn from "../components/ComponentBtn";
import Footer from "../components/Footer";

const Web1280Column = () => {
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
      <Footer
        footerPosition="relative"
        footerTop="unset"
        footerLeft="unset"
        footerDisplay="flex"
        footerFlexDirection="row"
        footerAlignItems="flex-start"
        footerJustifyContent="flex-start"
        footerPadding="3.5rem 10rem"
        footerGap="2.812rem"
        divMargin="0 !important"
        h3Margin="unset"
        h3Position="relative"
        h3Top="unset"
        h3Left="unset"
        h3FontWeight="unset"
        h3MinWidth="unset"
        h3Height="1rem"
        h3Width="2.875rem"
        h3Margin1="unset"
        h3Position1="relative"
        h3Top1="unset"
        h3Left1="unset"
        h3FontWeight1="unset"
        h3MinWidth1="unset"
        h3Height1="1rem"
        h3Width1="2.875rem"
        h3Margin2="unset"
        h3Position2="relative"
        h3Top2="unset"
        h3Left2="unset"
        h3FontWeight2="unset"
        h3MinWidth2="unset"
        h3Height2="1rem"
        h3Width2="2.875rem"
        h3Margin3="unset"
        h3Position3="relative"
        h3Top3="unset"
        h3Left3="unset"
        h3FontWeight3="unset"
        h3MinWidth3="unset"
        h3Height3="1rem"
        h3Width3="7.625rem"
        h3Margin4="unset"
        h3Position4="relative"
        h3Top4="unset"
        h3Left4="unset"
        h3FontWeight4="unset"
        h3Height4="1rem"
        h3Width4="8.375rem"
        h3Display="inline-block"
        h3Margin5="unset"
        h3Position5="relative"
        h3Top5="unset"
        h3Right="unset"
        h3FontWeight5="unset"
        h3MinWidth4="unset"
        h3Height5="1rem"
        h3Width5="4.25rem"
      />
    </div>
  );
};

export default Web1280Column;
