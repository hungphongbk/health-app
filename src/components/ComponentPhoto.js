import PropTypes from "prop-types";

const ComponentPhoto = ({ className = "" }) => {
  return (
    <div
      className={`h-[14.625rem] w-[14.625rem] relative text-left text-[0.938rem] text-white font-inter ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
      />
      <div className="absolute bottom-[0rem] left-[0rem] bg-gold w-[7.5rem] h-[2rem] z-[1]" />
      <div className="absolute bottom-[0.438rem] left-[0.5rem] tracking-[0.15px] leading-[1.125rem] inline-block w-[6.5rem] h-[1.125rem] min-w-[6.5rem] z-[2]">
        05.21.Morning
      </div>
    </div>
  );
};

ComponentPhoto.propTypes = {
  className: PropTypes.string,
};

export default ComponentPhoto;
