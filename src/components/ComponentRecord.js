import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentRecord = ({
  className = "",
  img,
  myRecommend1,
  title,
  buttonText
}) => {

  return (
    <div
      className={`w-auto aspect-square flex-1 flex flex-col items-start justify-start box-border relative gap-[0.687rem] text-center text-[1.563rem] text-gold bg-gold font-inter ${className}`}
    >
      <div className="bg-darkslategray-200 absolute inset-6">
        <img
          className="w-full absolute !m-[0] right-[0rem] left-[0rem] max-w-full overflow-hidden object-cover z-[0]"
          loading="lazy"
          alt=""
          src={myRecommend1}
        />
        <div className="w-full h-full flex flex-col items-center justify-center relative z-[1]">

          <h1
            className="m-0 h-[1.875rem] w-[15.063rem] relative text-inherit tracking-[0.13px] leading-[1.875rem] font-normal font-[inherit] inline-block shrink-0 z-[1]">
            {title}
          </h1>
          <div
            className="mt-2 px-4 py-1 leading-[1.25rem] inline-block shrink-0 z-[1] font-normal text-base bg-darkorange-100 text-white"
          >
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

ComponentRecord.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  myRecommend1: PropTypes.string,

  /** Style props */
  divMargin: PropTypes.string,
  divFontWeight: PropTypes.string,
}

export default ComponentRecord;
