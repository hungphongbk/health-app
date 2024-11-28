import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  prop,
  myRecommend2,
  mYEXERCISE,
  prop1,
}) => {
  return (
    <div
      className={`h-[18rem] flex-1 relative min-w-[11.688rem] text-center text-[1.563rem] text-gold font-inter mq950:flex-1 ${className}`}
    >
      <img
        className="absolute top-[0rem] left-[0rem] w-full h-full"
        alt=""
        src={prop}
      />
      <div className="absolute top-[1.5rem] left-[1.5rem] w-[15rem] flex flex-col items-start justify-start py-[5.5rem] px-[0rem] box-border gap-[0.625rem]">
        <img
          className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={myRecommend2}
        />
        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.13px] leading-[1.875rem] font-normal font-[inherit] z-[2] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
          {mYEXERCISE}
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[2.5rem] text-[0.875rem] text-white font-hiragino-kaku-gothic-pro">
          <div className="flex-1 bg-darkorange-100 flex flex-row items-start justify-start pt-[0.062rem] px-[0rem] pb-[0.187rem] z-[2]">
            <div className="h-[1.5rem] w-[10rem] relative bg-darkorange-100 hidden" />
            <h2 className="m-0 flex-1 relative text-inherit leading-[1.25rem] font-normal font-[inherit] z-[3]">
              {prop1}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  myRecommend2: PropTypes.string,
  mYEXERCISE: PropTypes.string,
  prop1: PropTypes.string,
};

export default FrameComponent;
