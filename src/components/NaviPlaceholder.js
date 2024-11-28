import IconPlaceholder from "./IconPlaceholder";
import PropTypes from "prop-types";

const NaviPlaceholder = ({ className = "" }) => {
  return (
    <div
      className={`h-[3rem] w-[10rem] flex flex-row items-start justify-start p-[0.5rem] box-border relative gap-[0.5rem] text-left text-[1rem] text-white font-hiragino-kaku-gothic-pro ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-100 opacity-[0] mix-blend-normal z-[0]" />
      <IconPlaceholder />
      <div className="h-[1.688rem] w-[6rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border z-[2]">
        <a className="[text-decoration:none] w-[6.063rem] h-[1.438rem] relative leading-[1.438rem] text-[inherit] inline-block shrink-0">
          テキスト
        </a>
      </div>
    </div>
  );
};

NaviPlaceholder.propTypes = {
  className: PropTypes.string,
};

export default NaviPlaceholder;
