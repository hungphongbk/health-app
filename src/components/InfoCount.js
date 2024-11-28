import { useMemo } from "react";
import PropTypes from "prop-types";

const InfoCount = ({
  className = "",
  infoCountPosition,
  infoCountTop,
  infoCountLeft,
  clippingGroupDisplay,
  clippingGroupFlexDirection,
  clippingGroupAlignItems,
  clippingGroupJustifyContent,
  clippingGroupPadding,
  clipPathPosition,
  clipPathHeight,
  clipPathTop,
  clipPathLeft,
  clipPathDisplay,
  clipPathFlex,
  clipPathTextDecoration,
}) => {
  const infoCountStyle = useMemo(() => {
    return {
      position: infoCountPosition,
      top: infoCountTop,
      left: infoCountLeft,
    };
  }, [infoCountPosition, infoCountTop, infoCountLeft]);

  const clippingGroupStyle = useMemo(() => {
    return {
      display: clippingGroupDisplay,
      flexDirection: clippingGroupFlexDirection,
      alignItems: clippingGroupAlignItems,
      justifyContent: clippingGroupJustifyContent,
      padding: clippingGroupPadding,
    };
  }, [
    clippingGroupDisplay,
    clippingGroupFlexDirection,
    clippingGroupAlignItems,
    clippingGroupJustifyContent,
    clippingGroupPadding,
  ]);

  const clipPathStyle = useMemo(() => {
    return {
      position: clipPathPosition,
      height: clipPathHeight,
      top: clipPathTop,
      left: clipPathLeft,
      display: clipPathDisplay,
      flex: clipPathFlex,
      textDecoration: clipPathTextDecoration,
    };
  }, [
    clipPathPosition,
    clipPathHeight,
    clipPathTop,
    clipPathLeft,
    clipPathDisplay,
    clipPathFlex,
    clipPathTextDecoration,
  ]);

  return (
    <div
      className={`absolute top-[calc(50%_-_16px)] left-[calc(50%_-_48px)] w-[1rem] h-[1rem] text-center text-[0.625rem] text-white font-inter mq1280:block mq1280:w-[1rem] mq1280:h-[1rem] mq1280:gap-[0rem] ${className}`}
      style={infoCountStyle}
    >
      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] bg-darkorange-200 mq1280:block mq1280:w-[1rem] mq1280:h-[1rem]" />
      <div
        className="absolute h-[90.63%] w-full top-[12.5%] right-[0%] bottom-[-3.12%] left-[0%] overflow-hidden mq1280:block mq1280:w-[1rem] mq1280:h-[0.906rem] mq1280:gap-[0rem]"
        style={clippingGroupStyle}
      >
        <a
          className="[text-decoration:none] absolute h-full w-full top-[0rem] left-[0rem] leading-[0.75rem] text-[inherit] inline-block mq1280:font-inter mq1280:text-[0.625rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto"
          style={clipPathStyle}
        >
          1
        </a>
      </div>
    </div>
  );
};

InfoCount.propTypes = {
  className: PropTypes.string,

  /** Style props */
  infoCountPosition: PropTypes.string,
  infoCountTop: PropTypes.string,
  infoCountLeft: PropTypes.string,
  clippingGroupDisplay: PropTypes.string,
  clippingGroupFlexDirection: PropTypes.string,
  clippingGroupAlignItems: PropTypes.string,
  clippingGroupJustifyContent: PropTypes.string,
  clippingGroupPadding: PropTypes.string,
  clipPathPosition: PropTypes.string,
  clipPathHeight: PropTypes.string,
  clipPathTop: PropTypes.string,
  clipPathLeft: PropTypes.string,
  clipPathDisplay: PropTypes.string,
  clipPathFlex: PropTypes.string,
  clipPathTextDecoration: PropTypes.string,
};

export default InfoCount;
