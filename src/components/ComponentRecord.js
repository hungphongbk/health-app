import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentRecord = ({
  className = "",
  prop,
  myRecommend1,
  divMargin,
  divFontWeight,
}) => {
  const div4Style = useMemo(() => {
    return {
      margin: divMargin,
      fontWeight: divFontWeight,
    };
  }, [divMargin, divFontWeight]);

  return (
    <div
      className={`w-[18rem] h-[18rem] flex flex-col items-start justify-start pt-[7rem] px-[1.5rem] pb-[7.187rem] box-border relative gap-[0.687rem] text-center text-[1.563rem] text-gold font-inter ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[0]"
        alt=""
        src={prop}
      />
      <div className="w-[15rem] h-[1.875rem] flex flex-row items-start justify-start relative z-[1]">
        <img
          className="h-[15rem] w-full absolute !m-[0] right-[0rem] bottom-[-7.625rem] left-[0rem] max-w-full overflow-hidden object-cover z-[0]"
          loading="lazy"
          alt=""
          src={myRecommend1}
        />
        <h1 className="m-0 h-[1.875rem] w-[15.063rem] relative text-inherit tracking-[0.13px] leading-[1.875rem] font-normal font-[inherit] inline-block shrink-0 z-[1]">
          BODY RECORD
        </h1>
      </div>
      <div className="w-[12.5rem] h-[1.25rem] flex flex-row items-start justify-start py-[0rem] pl-[2.5rem] pr-[0rem] box-border z-[2] text-[0.875rem] text-white font-hiragino-kaku-gothic-pro">
        <div className="h-[1.25rem] w-[10rem] flex flex-row items-start justify-start relative">
          <div className="h-[1.5rem] w-full absolute !m-[0] right-[0rem] bottom-[-0.187rem] left-[0rem] bg-darkorange-100 z-[0]" />
          <div
            className="h-[1.25rem] w-[10.063rem] relative leading-[1.25rem] inline-block shrink-0 z-[1]"
            style={div4Style}
          >
            自分のカラダの記録
          </div>
        </div>
      </div>
    </div>
  );
};

ComponentRecord.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  myRecommend1: PropTypes.string,

  /** Style props */
  divMargin: PropTypes.string,
  divFontWeight: PropTypes.string,
};

export default ComponentRecord;
