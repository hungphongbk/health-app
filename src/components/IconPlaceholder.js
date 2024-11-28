import PropTypes from "prop-types";

const IconPlaceholder = ({ className = "" }) => {
  return (
    <div className={`w-[2rem] relative h-[2rem] z-[1] ${className}`}>
      <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkorange-300 mix-blend-normal" />
    </div>
  );
};

IconPlaceholder.propTypes = {
  className: PropTypes.string,
};

export default IconPlaceholder;
