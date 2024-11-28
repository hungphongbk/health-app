import PropTypes from "prop-types";

const MainGraph = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden text-center text-[0.75rem] text-white font-inter mq1280:block mq1280:w-[36.813rem] mq1280:h-[18.352rem] mq1280:gap-[0rem] ${className}`}
    >
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_+_71.5px)] w-[1rem] h-[0.938rem] mq1280:block mq1280:w-[1rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8px)] leading-[0.938rem] inline-block min-w-[0.375rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          1
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_0px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_+_277.5px)] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8.5px)] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          5
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_0.5px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_+_122.5px)] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8.5px)] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          2
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_0.5px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_-_295.5px)] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8.5px)] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          6
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_0.5px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] right-[26.125rem] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] right-[0.563rem] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          9
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] right-[0rem] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_+_174.5px)] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8.5px)] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          3
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_0.5px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_-_242.5px)] w-[1rem] h-[0.938rem] mq1280:block mq1280:w-[1rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8px)] leading-[0.938rem] inline-block min-w-[0.438rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          7
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_-_0px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] right-[22.75rem] w-[1.375rem] h-[0.938rem] mq1280:block mq1280:w-[1.375rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] right-[0.5rem] leading-[0.938rem] inline-block min-w-[0.875rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          10
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] right-[0rem] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] left-[calc(50%_+_225.5px)] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_8.5px)] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          4
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_0.5px)] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] right-[29.375rem] w-[1.063rem] h-[0.938rem] mq1280:block mq1280:w-[1.063rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] right-[0.563rem] leading-[0.938rem] inline-block min-w-[0.5rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          8
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] right-[0rem] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] right-[19.438rem] w-[1.313rem] h-[0.938rem] mq1280:block mq1280:w-[1.313rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] right-[0.563rem] leading-[0.938rem] inline-block min-w-[0.75rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          11
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] right-[0rem] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <div
        className="absolute top-[calc(50%_+_120.2px)] right-[16.125rem] w-[1.313rem] h-[0.938rem] mq1280:block mq1280:w-[1.313rem] mq1280:h-[0.938rem]">
        <div
          className="absolute top-[calc(50%_-_7.5px)] right-[0.5rem] leading-[0.938rem] inline-block min-w-[0.813rem] mq1280:font-inter mq1280:text-[0.75rem] mq1280:leading-[0.938rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          12
        </div>
        <div
          className="absolute top-[calc(50%_-_5.5px)] right-[0rem] text-[0.5rem] leading-[0.75rem] font-hiragino-kaku-gothic-pro inline-block min-w-[0.5rem] mq1280:font-hiragino-kaku-gothic-pro mq1280:text-[0.5rem] mq1280:leading-[0.75rem] mq1280:text-center mq1280:block mq1280:w-auto mq1280:[align-self:unset] mq1280:h-auto">
          月
        </div>
      </div>
      <img
        className="absolute h-[91.28%] w-[calc(100%_-_17px)] top-[0%] right-[0.563rem] bottom-[8.72%] left-[0.5rem] max-w-full overflow-hidden max-h-full mq1280:block mq1280:w-[35.75rem] mq1280:h-[16.75rem]"
        loading="lazy"
        alt=""
        src="/-112.svg"
      />
      <img
        className="absolute h-[52.62%] w-[98.56%] top-[4.94%] right-[0.76%] bottom-[42.44%] left-[0.68%] max-w-full overflow-hidden max-h-full mq1280:block mq1280:w-[36.281rem] mq1280:h-[9.656rem]"
        alt=""
        src="/-1131.svg"
      />
      <img
        className="absolute h-[77.83%] w-[98.39%] top-[4.94%] right-[0.93%] bottom-[17.23%] left-[0.68%] max-w-full overflow-hidden max-h-full mq1280:block mq1280:w-[36.219rem] mq1280:h-[14.281rem]"
        alt=""
        src="/-1141.svg"
      />
    </div>
  );
};

MainGraph.propTypes = {
  className: PropTypes.string,
};

export default MainGraph;
