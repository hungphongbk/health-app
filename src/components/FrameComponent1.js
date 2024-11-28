import NaviPlaceholder from "./NaviPlaceholder";
import InfoCount from "./InfoCount";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[11.5rem] flex flex-col items-start justify-start gap-[0.375rem] max-w-full text-left text-[0.688rem] text-darkslategray-200 font-hiragino-kaku-gothic-pro ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-start max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-end justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[2rem] w-[2rem] absolute !m-[0] top-[2rem] right-[10.625rem] border-dimgray border-[1px] border-solid box-border" />
            <div className="self-stretch flex-1 flex flex-row items-start justify-start max-w-full">
              <div className="self-stretch w-[14.5rem] flex flex-col items-start justify-start gap-[1.125rem]">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <a className="[text-decoration:none] self-stretch relative tracking-[0.03px] leading-[1rem] text-[inherit] z-[1]">
                    LOGO
                  </a>
                  <img
                    className="w-[9rem] flex-1 relative max-h-full object-contain"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="self-stretch relative tracking-[0.03px] leading-[1rem]">
                  ヘッダー
                </div>
              </div>
            </div>
            <div className="w-[27.5rem] !m-[0] absolute top-[0rem] right-[16.625rem] flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
              <div className="w-[21.5rem] flex flex-row items-start justify-start gap-[1.5rem] max-w-full">
                <a className="[text-decoration:none] flex-1 relative tracking-[0.03px] leading-[1rem] text-[inherit]">
                  ヘッダーナビ用パーツ
                </a>
                <a className="[text-decoration:none] flex-1 relative tracking-[0.03px] leading-[1rem] text-[inherit]">
                  アイコン
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1rem] text-white">
                <NaviPlaceholder />
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[2rem] h-[2rem] relative"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[2rem] h-[2rem] relative object-cover"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[2rem] h-[2rem] relative object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <img className="w-[2rem] h-[2rem] relative" alt="" />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <img className="w-[2rem] h-[2rem] relative" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[12.625rem] flex flex-col items-start justify-start gap-[1rem] mt-[-7.125rem]">
            <a className="[text-decoration:none] w-[10.063rem] relative tracking-[0.03px] leading-[1rem] text-[inherit] inline-block">
              通知用アイコン
            </a>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.5rem] pr-[0rem] text-darkslategray-300">
              <div className="flex-1 flex flex-col items-start justify-start">
                <InfoCount
                  infoCountPosition="relative"
                  infoCountTop="unset"
                  infoCountLeft="unset"
                  clippingGroupDisplay="flex"
                  clippingGroupFlexDirection="row"
                  clippingGroupAlignItems="flex-start"
                  clippingGroupJustifyContent="flex-start"
                  clippingGroupPadding="0rem 0rem 0.156rem"
                  clipPathPosition="relative"
                  clipPathHeight="unset"
                  clipPathTop="unset"
                  clipPathLeft="unset"
                  clipPathDisplay="unset"
                  clipPathFlex="1"
                  clipPathTextDecoration="none"
                />
                <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.125rem] pr-[0rem]">
                  <div className="flex-1 relative tracking-[0.03px] leading-[1rem] mix-blend-normal">
                    <p className="m-0">アイコンの右上から</p>
                    <p className="m-0">さらに8ピクセル右にずらす</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80rem] h-[4rem] flex flex-row items-start justify-start py-[0rem] px-[10rem] box-border relative gap-[18rem] z-[1] text-[1rem] text-white">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.16)] bg-darkslategray-100 z-[0]" />
        <img className="h-[4rem] w-[9rem] relative object-cover z-[1]" alt="" />
        <div className="h-[3.5rem] w-[33rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border z-[2]">
          <div className="w-[33rem] h-[3rem] flex flex-row items-start justify-start">
            <div className="h-[3rem] w-[10rem] overflow-hidden shrink-0 flex flex-row items-start justify-start p-[0.5rem] box-border relative gap-[0.5rem]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
              <img className="h-[2rem] w-[2rem] relative z-[1]" alt="" />
              <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[2]">
                <h3 className="m-0 w-[6.063rem] h-[1.438rem] relative text-inherit leading-[1.438rem] font-normal font-[inherit] inline-block shrink-0">
                  自分の記録
                </h3>
              </div>
            </div>
            <div className="h-[3rem] w-[10rem] overflow-hidden shrink-0 flex flex-row items-start justify-start p-[0.5rem] box-border relative gap-[0.5rem]">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
              <img
                className="h-[2rem] w-[2rem] relative object-contain z-[1]"
                alt=""
              />
              <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[2]">
                <h3 className="m-0 w-[6.063rem] h-[1.438rem] relative text-inherit leading-[1.438rem] font-normal font-[inherit] inline-block shrink-0">
                  チャレンジ
                </h3>
              </div>
            </div>
            <div className="h-[3rem] w-[11rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1rem] box-border">
              <div className="w-[10rem] h-[3rem] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.5rem] pb-[0.812rem] pl-[2rem] pr-[1rem] box-border relative">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
                <img
                  className="h-[2rem] w-[2rem] absolute !m-[0] top-[calc(50%_-_16px)] left-[0.5rem] object-cover z-[1]"
                  alt=""
                />
                <InfoCount
                  infoCountPosition="relative"
                  infoCountTop="unset"
                  infoCountLeft="unset"
                  clippingGroupDisplay="flex"
                  clippingGroupFlexDirection="row"
                  clippingGroupAlignItems="flex-start"
                  clippingGroupJustifyContent="flex-start"
                  clippingGroupPadding="0rem 0rem 0.156rem"
                  clipPathPosition="relative"
                  clipPathHeight="0.75rem"
                  clipPathTop="unset"
                  clipPathLeft="unset"
                  clipPathDisplay="inline-block"
                  clipPathFlex="unset"
                  clipPathTextDecoration="unset"
                />
                <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[3]">
                  <h3 className="m-0 w-[6.063rem] h-[1.438rem] relative text-inherit leading-[1.438rem] font-normal font-[inherit] inline-block shrink-0">
                    お知らせ
                  </h3>
                </div>
              </div>
            </div>
            <div className="h-[2.5rem] w-[2rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
              <img className="w-[2rem] h-[2rem] relative" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
