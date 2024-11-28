import { useState, useCallback } from "react";
import Web390DrawrMenue from "./Web390DrawrMenue";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import InfoCount from "./InfoCount";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const [isWeb390DrawrMenueOpen, setWeb390DrawrMenueOpen] = useState(false);
  const navigate = useNavigate();

  const openWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(true);
  }, []);

  const closeWeb390DrawrMenue = useCallback(() => {
    setWeb390DrawrMenueOpen(false);
  }, []);

  const onNaviMemoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <header className={`w-full h-[4rem] flex items-center justify-between px-[10rem] bg-darkslategray-100 shadow-[0px_3px_6px_rgba(0,_0,_0,_0.16)] ${className}`}>
        <img
          className="h-[4rem] w-[9rem] object-cover cursor-pointer"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <div className="flex items-center gap-[2rem]">
          <div className="flex items-center gap-[0.5rem] cursor-pointer" onClick={onNaviMemoContainerClick}>
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-memo.svg"
            />
            <a className="[text-decoration:none] text-white">
              自分の記録
            </a>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-challenge1@2x.png"
            />
            <a className="[text-decoration:none] text-white">
              チャレンジ
            </a>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-info@2x.png"
            />
            <a className="[text-decoration:none] text-white">
              お知らせ
            </a>
            <InfoCount />
          </div>
        </div>
        <img
          className="h-[2rem] w-[2rem] cursor-pointer"
          loading="lazy"
          alt=""
          src="/icon-menu.svg"
          onClick={openWeb390DrawrMenue}
        />
      </header>
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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;