import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ComponentDropdownMenu from "./ComponentDropdownMenu";
import PropTypes from "prop-types";

const Web390DrawrMenue = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onComponentDropdownMenuContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onComponentDropdownMenuContainerClick1 = useCallback(() => {
    navigate("/web-1280-column");
  }, [navigate]);

  return (
    <div
      className={`w-[280px] relative bg-gray-200 overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] max-w-full max-h-full ${className}`}
    >
      <div className="bg-darkslategray-100 flex flex-row items-start justify-start">
        <div className="h-8 w-8 relative bg-darkslategray-100 hidden" />
        <img
          className="h-8 w-8 relative z-[1]"
          loading="lazy"
          alt=""
          src="/icon-close.svg"
        />
      </div>
      <ComponentDropdownMenu
        onComponentDropdownMenuContainerClick={
          onComponentDropdownMenuContainerClick
        }
        componentDropdownMenuWidth="280px"
        componentDropdownMenuHeight="72px"
        componentDropdownMenuGap="22px"
        divTop="0px"
        divRight="0px"
        divBottom="0px"
        divLeft="0px"
        divWidth="280px"
        divHeight="1px"
        frameInputWidth="280px"
        frameInputBorder="unset"
        frameInputOutline="unset"
        frameInputBackgroundColor="unset"
        frameInputHeight="26px"
        frameInputPadding="0px 0px 0px 32px"
        frameInputFontFamily="unset"
        frameInputFontSize="unset"
        frameInputColor="unset"
        propPosition="relative"
        propTop="unset"
        propLeft="unset"
        propHeight="26px"
        divWidth1="280px"
        divHeight1="1px"
      />
      <section className="self-stretch flex flex-col items-start justify-start py-[23px] pl-8 pr-0 relative text-left text-lg text-white font-hiragino-kaku-gothic-pro">
        <div className="w-full h-[72px] !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[70px] z-[0]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[0]" />
          <div className="w-[280px] relative bg-gray-300 h-px mix-blend-normal z-[3]" />
          <div className="w-[280px] relative bg-darkslategray-400 h-px mix-blend-normal z-[2]" />
        </div>
        <div className="w-full h-[72px] !m-[0] absolute top-[72px] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[70px] z-[1]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[0]" />
          <div className="w-[280px] relative bg-gray-300 h-px mix-blend-normal z-[3]" />
          <div className="w-[280px] relative bg-darkslategray-400 h-px mix-blend-normal z-[2]" />
        </div>
        <div className="w-full h-[72px] !m-[0] absolute top-[calc(50%_-_36px)] right-[0px] left-[0px] flex flex-col items-start justify-start gap-[70px] z-[2]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[0]" />
          <div className="w-[280px] relative bg-gray-300 h-px mix-blend-normal z-[3]" />
          <div className="w-[280px] relative bg-darkslategray-400 h-px mix-blend-normal z-[2]" />
        </div>
        <div
          className="w-full h-[72px] !m-[0] absolute right-[0px] bottom-[72px] left-[0px] flex flex-col items-start justify-start gap-[70px] cursor-pointer z-[3]"
          onClick={onComponentDropdownMenuContainerClick1}
        >
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[0]" />
          <div className="w-[280px] relative bg-gray-300 h-px mix-blend-normal z-[3]" />
          <div className="w-[280px] relative bg-darkslategray-400 h-px mix-blend-normal z-[2]" />
        </div>
        <div className="w-full h-[72px] !m-[0] absolute right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-start gap-[70px] z-[4]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-100 z-[0]" />
          <div className="w-[280px] relative bg-gray-300 h-px mix-blend-normal z-[3]" />
          <div className="w-[280px] relative bg-darkslategray-400 h-px mix-blend-normal z-[2]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[46px]">
          <div className="self-stretch relative leading-[26px] z-[1]">
            体重グラフ
          </div>
          <div className="self-stretch relative leading-[26px] z-[1]">目標</div>
          <div className="self-stretch relative leading-[26px] z-[1]">
            選択中のコース
          </div>
          <div className="self-stretch relative leading-[26px] z-[1]">
            コラム一覧
          </div>
          <div className="self-stretch relative leading-[26px] z-[1]">設定</div>
        </div>
      </section>
    </div>
  );
};

Web390DrawrMenue.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Web390DrawrMenue;
