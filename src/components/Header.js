import { useState, useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Web390DrawrMenue from "./Web390DrawrMenue";
import PortalPopup from "./PortalPopup";
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
          onClick={onNaviMemoContainerClick}
        />
        <div className="flex items-center gap-[2rem]">
          <NavLink
            to="/top-my-page"
            className={({ isActive }) =>
              `flex items-center gap-[0.5rem] cursor-pointer no-underline ${isActive ? "text-activeLink" : "text-white"}`
            }
          >
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-memo.svg"
            />
            自分の記録
          </NavLink>
          <NavLink
            to="/my-record"
            className={({ isActive }) =>
              `flex items-center gap-[0.5rem] no-underline ${isActive ? "text-activeLink" : "text-white"}`
            }
          >
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-challenge1@2x.png"
            />
            チャレンジ
          </NavLink>
          <NavLink
            to="/announcement"
            className={({ isActive }) =>
              `flex items-center gap-[0.5rem] no-underline ${isActive ? "text-activeLink" : "text-white"}`
            }
          >
            <img
              className="h-[2rem] w-[2rem]"
              loading="lazy"
              alt=""
              src="/icon-info@2x.png"
            />
            お知らせ
            <InfoCount />
          </NavLink>
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