import { useState, useCallback } from "react";
import Web390DrawrMenue from "./Web390DrawrMenue";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import InfoCount from "./InfoCount";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false);
  const navigate = useNavigate();

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true);
  }, []);

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false);
  }, []);

  const onLogoImageClick = useCallback(() => {
    navigate("/web-1280-top-mypage");
  }, [navigate]);

  return (
    <>
      <section
        className={`self-stretch flex flex-col items-start justify-start gap-[3.5rem] max-w-full mq640:gap-[1.75rem] ${className}`}
      >
        <header className="w-[80rem] h-[4rem] flex flex-row items-start justify-start py-[0rem] px-[10rem] box-border relative gap-[18rem] z-[2] text-left text-[1rem] text-white font-hiragino-kaku-gothic-pro">
          <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.16)] bg-darkslategray-100 z-[0]" />
          <img
            className="h-[4rem] w-[9rem] relative object-cover cursor-pointer z-[1]"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
            onClick={onLogoImageClick}
          />
          <div className="h-[3.5rem] w-[33rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border z-[2]">
            <div className="w-[33rem] h-[3rem] flex flex-row items-start justify-start">
              <div className="h-[3rem] w-[10rem] overflow-hidden shrink-0 flex flex-row items-start justify-start p-[0.5rem] box-border relative gap-[0.5rem]">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
                <img
                  className="h-[2rem] w-[2rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon-memo.svg"
                />
                <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[2]">
                  <a className="[text-decoration:none] w-[6.063rem] h-[1.438rem] relative leading-[1.438rem] text-[inherit] inline-block shrink-0">
                    自分の記録
                  </a>
                </div>
              </div>
              <div className="h-[3rem] w-[10rem] overflow-hidden shrink-0 flex flex-row items-start justify-start p-[0.5rem] box-border relative gap-[0.5rem]">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
                <img
                  className="h-[2rem] w-[2rem] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon-challenge@2x.png"
                />
                <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[2]">
                  <a className="[text-decoration:none] w-[6.063rem] h-[1.438rem] relative leading-[1.438rem] text-[inherit] inline-block shrink-0">
                    チャレンジ
                  </a>
                </div>
              </div>
              <div className="h-[3rem] w-[11rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1rem] box-border">
                <div className="w-[10rem] h-[3rem] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.5rem] pb-[0.812rem] pl-[2rem] pr-[1rem] box-border relative">
                  <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
                  <img
                    className="h-[2rem] w-[2rem] absolute !m-[0] top-[calc(50%_-_16px)] left-[0.5rem] object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon-info@2x.png"
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
                    clipPathTextDecoration="none"
                  />
                  <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[3]">
                    <a className="[text-decoration:none] w-[6.063rem] h-[1.438rem] relative leading-[1.438rem] text-[inherit] inline-block shrink-0">
                      お知らせ
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-[2.5rem] w-[2rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[2rem] h-[2rem] relative cursor-pointer"
                  loading="lazy"
                  alt=""
                  src="/icon-menu.svg"
                  onClick={openWeb390DrawrMenue}
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <img
            className="w-[60rem] relative max-h-full max-w-full"
            loading="lazy"
            alt=""
            src="/-4.svg"
          />
        </div>
      </section>
      {isWeb390DrawrMenueOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWeb390DrawrMenue}
        >
          <Web390DrawrMenue onClose={closeWeb390DrawrMenue} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
