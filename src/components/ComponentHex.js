import PropTypes from "prop-types";

const ComponentHex = ({ className = "", img, morning }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center w-[8.5rem] h-[8.5rem] text-center text-[1.25rem] text-white font-inter ${className}`}>
      <img
        className="absolute inset-0 w-full h-full object-contain"
        alt=""
        src={img}
      />
      <img
        className="relative w-[3.5rem] h-[3.5rem] mt-2 object-contain"
        loading="lazy"
        alt=""
        src="/icon-knife.svg"
      />
      <h1 className="relative inline-block mt-1 text-inherit leading-[1.5rem] font-normal">
        {morning}
      </h1>
    </div>
  );
};

ComponentHex.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  morning: PropTypes.string,
}

export default ComponentHex;