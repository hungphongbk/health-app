import PropTypes from "prop-types";
import BodyRecordChart from './BodyRecordChart'

const MyRecordGraph = ({ className = "" }) => {
  return (
    <>
      <BodyRecordChart/>
      <div className="w-full mt-10 bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border max-w-full text-left text-white font-inter">
        <div className="h-[16.5rem] w-[60rem] relative bg-darkslategray-100 hidden max-w-full z-[1]" />
        <div className="h-[2.25rem] w-[15.125rem] flex flex-col items-start justify-start">
          <h2 className="m-0 h-[2.25rem] relative text-inherit tracking-[0.15px] leading-[1.125rem] font-normal font-[inherit] inline-block shrink-0 z-[1]">
            MY EXERCISE
          </h2>
          <div className="self-stretch flex flex-row items-start justify-end mt-[-2.25rem] text-[1.375rem]">
            <div className="w-[9.188rem] relative tracking-[0.11px] leading-[1.688rem] inline-block shrink-0 z-[1] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              2021.05.21
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] box-border max-w-full ml-[-15.125rem]">
          <div className="self-stretch flex flex-col items-end justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0rem] pr-[1.875rem] box-border max-w-full">
              <img
                className="h-[12rem] flex-1 relative max-w-full overflow-hidden z-[1]"
                loading="lazy"
                alt=""
                src="/-2.svg"
              />
            </div>
            <div className="rounded-10xs bg-gray-100 overflow-hidden flex flex-row items-start justify-start pt-[0.5rem] px-[0rem] pb-[9.375rem] z-[1] mt-[-12rem]">
              <div className="h-[12rem] w-[0.375rem] relative rounded-10xs bg-gray-100 hidden" />
              <div className="h-[2.125rem] w-[0.375rem] relative rounded-10xs bg-gold z-[1]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MyRecordGraph.propTypes = {
  className: PropTypes.string,
};

export default MyRecordGraph;
