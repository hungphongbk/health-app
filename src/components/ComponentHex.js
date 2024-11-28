import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentHex = ({
  className = "",
  componentHexLeft,
  prop,
  morning,
  morningLeft,
  morningMinWidth,
}) => {
  const componentHexStyle = useMemo(() => {
    return {
      left: componentHexLeft,
    };
  }, [componentHexLeft]);

  const morningStyle = useMemo(() => {
    return {
      left: morningLeft,
      minWidth: morningMinWidth,
    };
  }, [morningLeft, morningMinWidth]);

  return (
    <div
      className={`absolute top-[25rem] left-[17rem] w-[8.5rem] h-[8.5rem] text-center text-[1.25rem] text-white font-inter mq1280:block mq1280:w-[8.5rem] mq1280:h-[8.5rem] mq1280:gap-[0rem] ${className}`}
      style={componentHexStyle}
    >
      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] mq1280:block mq1280:w-[8.5rem] mq1280:h-[8.5rem]" />
      <img
        className="absolute h-[calc(100%_-_2px)] w-[calc(100%_-_20px)] top-[0.063rem] right-[0.625rem] bottom-[0.063rem] left-[0.625rem] max-w-full overflow-hidden max-h-full object-contain mq1280:block mq1280:w-[7.25rem] mq1280:h-[8.375rem]"
        alt=""
        src={prop}
      />
      <h1
        className="m-0 absolute top-[calc(50%_+_16px)] left-[calc(50%_-_39px)] text-inherit leading-[1.5rem] font-normal font-[inherit] inline-block min-w-[4.938rem] mq1280:font-inter mq1280:text-[1.25rem] mq1280:leading-[1.5rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto mq450:text-[1rem] mq450:leading-[1.188rem]"
        style={morningStyle}
      >
        {morning}
      </h1>
      <img
        className="absolute top-[calc(50%_-_40px)] left-[calc(50%_-_28px)] w-[3.5rem] h-[3.5rem] mq1280:block mq1280:w-[3.5rem] mq1280:h-[3.5rem]"
        loading="lazy"
        alt=""
        src="/icon-knife.svg"
      />
    </div>
  );
};

ComponentHex.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  morning: PropTypes.string,

  /** Style props */
  componentHexLeft: PropTypes.string,
  morningLeft: PropTypes.string,
  morningMinWidth: PropTypes.string,
};

export default ComponentHex;
