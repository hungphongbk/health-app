import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentBtn = ({
  className = "",
  componentBtnPosition,
  componentBtnTop,
  componentBtnLeft,
  componentBtnWidth,
  componentBtnAlignSelf,
  componentBtnFlex,
  prop,
  prop1,
  h1Width,
  h1Height,
  h1Margin,
  h1FontWeight,
}) => {
  const componentBtnStyle = useMemo(() => {
    return {
      position: componentBtnPosition,
      top: componentBtnTop,
      left: componentBtnLeft,
      width: componentBtnWidth,
      alignSelf: componentBtnAlignSelf,
      flex: componentBtnFlex,
    };
  }, [
    componentBtnPosition,
    componentBtnTop,
    componentBtnLeft,
    componentBtnWidth,
    componentBtnAlignSelf,
    componentBtnFlex,
  ]);

  const h1Style = useMemo(() => {
    return {
      width: h1Width,
      height: h1Height,
      margin: h1Margin,
      fontWeight: h1FontWeight,
    };
  }, [h1Width, h1Height, h1Margin, h1FontWeight]);

  return (
    <div
      className={`absolute top-[66.5rem] left-[30.75rem] w-[18.5rem] h-[3.5rem] text-center text-[1.125rem] text-white font-hiragino-kaku-gothic-pro mq1280:block mq1280:w-[18.5rem] mq1280:h-[3.5rem] mq1280:gap-[0rem] ${className}`}
      style={componentBtnStyle}
    >
      <img
        className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full mq1280:block mq1280:w-[18.5rem] mq1280:h-[3.5rem]"
        loading="lazy"
        alt=""
        src={prop}
      />
      <h1
        className="m-0 absolute w-[calc(100%_-_8px)] top-[calc(50%_-_14px)] left-[0.25rem] text-inherit leading-[1.625rem] font-normal font-[inherit] inline-block mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[1.125rem] mq1280:leading-[1.625rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto"
        style={h1Style}
      >
        {prop1}
      </h1>
    </div>
  );
};

ComponentBtn.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  componentBtnPosition: PropTypes.string,
  componentBtnTop: PropTypes.string,
  componentBtnLeft: PropTypes.string,
  componentBtnWidth: PropTypes.string,
  componentBtnAlignSelf: PropTypes.string,
  componentBtnFlex: PropTypes.string,
  h1Width: PropTypes.string,
  h1Height: PropTypes.string,
  h1Margin: PropTypes.string,
  h1FontWeight: PropTypes.string,
};

export default ComponentBtn;
