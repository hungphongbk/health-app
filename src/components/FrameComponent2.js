import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-center text-[0.938rem] text-gold font-hiragino-kaku-gothic-pro mq700:gap-[1.25rem] ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end gap-[1rem] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1rem] box-border max-w-full mq700:min-w-full">
          <div className="self-stretch bg-darkslategray-100 overflow-hidden flex flex-col items-start justify-start py-[1rem] px-[1.5rem] box-border relative gap-[1.468rem] max-w-full">
            <div className="w-[60rem] h-[19rem] relative bg-darkslategray-100 hidden max-w-full z-[0]" />
            <div className="w-[15.125rem] flex flex-row items-start justify-start text-left text-white font-inter">
              <h2 className="m-0 w-[6.063rem] relative text-inherit tracking-[0.15px] leading-[1.125rem] font-normal font-[inherit] inline-block shrink-0 z-[1]">
                BODY RECORD
              </h2>
              <div className="flex-1 relative text-[1.375rem] tracking-[0.11px] leading-[1.688rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                2021.05.21
              </div>
            </div>
            <div className="!m-[0] absolute bottom-[1rem] left-[2rem] rounded-2xs bg-white flex flex-row items-start justify-start pt-[0rem] pb-[0.125rem] pl-[1.312rem] pr-[1.187rem] z-[1]">
              <div className="h-[1.5rem] w-[3.5rem] relative rounded-2xs bg-white hidden" />
              <h2 className="m-0 relative text-inherit tracking-[0.08px] leading-[1.375rem] font-normal font-[inherit] z-[2]">
                日
              </h2>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.437rem] box-border max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.875rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[0.25rem] pr-[0.187rem] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.562rem] box-border relative max-w-full">
                    <img
                      className="h-[11.563rem] w-[53.188rem] absolute !m-[0] top-[-1.344rem] left-[0.238rem] overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/-131.svg"
                    />
                    <img
                      className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/-114.svg"
                    />
                    <img
                      className="h-[8.906rem] flex-1 relative max-w-full overflow-hidden z-[3]"
                      alt=""
                      src="/-113.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.275rem] relative">
                  <div className="!m-[0] absolute bottom-[0rem] left-[3.563rem] rounded-2xs bg-white flex flex-row items-start justify-start pt-[0rem] pb-[0.125rem] pl-[1.312rem] pr-[1.187rem] z-[1]">
                    <div className="h-[1.5rem] w-[3.5rem] relative rounded-2xs bg-white hidden" />
                    <h2 className="m-0 relative text-inherit tracking-[0.08px] leading-[1.375rem] font-normal font-[inherit] z-[2]">
                      週
                    </h2>
                  </div>
                  <div className="!m-[0] absolute bottom-[0rem] left-[8.063rem] rounded-2xs bg-white flex flex-row items-start justify-start pt-[0rem] pb-[0.125rem] pl-[1.312rem] pr-[1.187rem] z-[1]">
                    <div className="h-[1.5rem] w-[3.5rem] relative rounded-2xs bg-white hidden" />
                    <h2 className="m-0 relative text-inherit tracking-[0.08px] leading-[1.375rem] font-normal font-[inherit] z-[2]">
                      月
                    </h2>
                  </div>
                  <div className="!m-[0] absolute bottom-[0rem] left-[12.563rem] rounded-2xs bg-gold flex flex-row items-start justify-start pt-[0rem] pb-[0.125rem] pl-[1.312rem] pr-[1.187rem] z-[1] text-white">
                    <div className="h-[1.5rem] w-[3.5rem] relative rounded-2xs bg-gold hidden" />
                    <h2 className="m-0 relative text-inherit tracking-[0.08px] leading-[1.375rem] font-normal font-[inherit] z-[2]">
                      年
                    </h2>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-between pt-[0rem] pb-[0.725rem] pl-[4.812rem] pr-[0rem] gap-[1.25rem] z-[3] text-[0.75rem] text-white font-inter mq700:flex-wrap mq950:pl-[2.375rem] mq950:box-border">
                    <div className="ml-[-4.875rem] flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.187rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.563rem]">
                        6
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem]">
                        7
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.563rem]">
                        8
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.563rem]">
                        9
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.938rem]">
                        10
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block z-[1]">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.813rem]">
                        11
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block z-[1]">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[0.938rem]">
                        12
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block z-[1]">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.125rem]">
                      <div className="flex-1 relative leading-[0.938rem]">
                        1
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.563rem]">
                        2
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem]">
                        3
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem]">
                        4
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                    <div className="w-[1.063rem] flex flex-row items-start justify-start gap-[0.062rem]">
                      <div className="flex-1 relative leading-[0.938rem] inline-block min-w-[0.563rem]">
                        5
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-[0.5rem] font-hiragino-kaku-gothic-pro">
                        <div className="w-[0.563rem] relative leading-[0.75rem] inline-block">
                          月
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[3rem] w-[3rem] relative"
          loading="lazy"
          alt=""
          src="/component-scroll.svg"
        />
      </div>
      <div className="w-[60rem] bg-darkslategray-100 overflow-hidden flex flex-row items-start justify-start py-[1rem] px-[1.5rem] box-border max-w-full text-left text-white font-inter">
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
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
