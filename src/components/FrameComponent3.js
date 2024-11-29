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
