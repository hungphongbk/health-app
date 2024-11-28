import { useMemo } from "react";
import PropTypes from "prop-types";

const ComponentDropdownMenu = ({
  className = "",
  onComponentDropdownMenuContainerClick,
  componentDropdownMenuWidth,
  componentDropdownMenuHeight,
  componentDropdownMenuGap,
  divTop,
  divRight,
  divBottom,
  divLeft,
  divWidth,
  divHeight,
  placeholder,
  frameInputWidth,
  frameInputBorder,
  frameInputOutline,
  frameInputBackgroundColor,
  frameInputHeight,
  frameInputPadding,
  frameInputFontFamily,
  frameInputFontSize,
  frameInputColor,
  propPosition,
  propTop,
  propLeft,
  propHeight,
  divWidth1,
  divHeight1,
}) => {
  const componentDropdownMenuStyle = useMemo(() => {
    return {
      width: componentDropdownMenuWidth,
      height: componentDropdownMenuHeight,
      gap: componentDropdownMenuGap,
    };
  }, [
    componentDropdownMenuWidth,
    componentDropdownMenuHeight,
    componentDropdownMenuGap,
  ]);

  const div1Style = useMemo(() => {
    return {
      top: divTop,
      right: divRight,
      bottom: divBottom,
      left: divLeft,
    };
  }, [divTop, divRight, divBottom, divLeft]);

  const div2Style = useMemo(() => {
    return {
      width: divWidth,
      height: divHeight,
    };
  }, [divWidth, divHeight]);

  const frameInputStyle = useMemo(() => {
    return {
      width: frameInputWidth,
      border: frameInputBorder,
      outline: frameInputOutline,
      backgroundColor: frameInputBackgroundColor,
      height: frameInputHeight,
      padding: frameInputPadding,
      fontFamily: frameInputFontFamily,
      fontSize: frameInputFontSize,
      color: frameInputColor,
    };
  }, [
    frameInputWidth,
    frameInputBorder,
    frameInputOutline,
    frameInputBackgroundColor,
    frameInputHeight,
    frameInputPadding,
    frameInputFontFamily,
    frameInputFontSize,
    frameInputColor,
  ]);

  const Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propPosition, propTop, propLeft, propHeight]);

  const div3Style = useMemo(() => {
    return {
      width: divWidth1,
      height: divHeight1,
    };
  }, [divWidth1, divHeight1]);

  return (
    <div
      className={`w-[17.5rem] h-[4.5rem] flex flex-col items-start justify-start relative gap-[1.375rem] z-[1] ${className}`}
      onClick={onComponentDropdownMenuContainerClick}
      style={componentDropdownMenuStyle}
    >
      <div
        className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-100 z-[0]"
        style={div1Style}
      />
      <div
        className="w-[17.5rem] relative bg-gray-300 h-[0.063rem] mix-blend-normal z-[4]"
        style={div2Style}
      />
      <input
        className="w-[17.5rem] [border:none] [outline:none] bg-[transparent] h-[1.625rem] flex flex-row items-start justify-start py-[0rem] px-[2rem] box-border font-hiragino-kaku-gothic-pro text-[1.125rem] text-white z-[2]"
        placeholder={placeholder}
        type="text"
        style={frameInputStyle}
      />
      <div
        className="w-[17.5rem] relative bg-darkslategray-400 h-[0.063rem] mix-blend-normal z-[3]"
        style={div3Style}
      />
    </div>
  );
};

ComponentDropdownMenu.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  componentDropdownMenuWidth: PropTypes.string,
  componentDropdownMenuHeight: PropTypes.string,
  componentDropdownMenuGap: PropTypes.string,
  divTop: PropTypes.string,
  divRight: PropTypes.string,
  divBottom: PropTypes.string,
  divLeft: PropTypes.string,
  divWidth: PropTypes.string,
  divHeight: PropTypes.string,
  frameInputWidth: PropTypes.string,
  frameInputBorder: PropTypes.string,
  frameInputOutline: PropTypes.string,
  frameInputBackgroundColor: PropTypes.string,
  frameInputHeight: PropTypes.string,
  frameInputPadding: PropTypes.string,
  frameInputFontFamily: PropTypes.string,
  frameInputFontSize: PropTypes.string,
  frameInputColor: PropTypes.string,
  propPosition: PropTypes.string,
  propTop: PropTypes.string,
  propLeft: PropTypes.string,
  propHeight: PropTypes.string,
  divWidth1: PropTypes.string,
  divHeight1: PropTypes.string,

  /** Action props */
  onComponentDropdownMenuContainerClick: PropTypes.func,
};

export default ComponentDropdownMenu;
