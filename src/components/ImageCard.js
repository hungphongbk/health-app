import * as React from "react";
import PropTypes from "prop-types";

function ImageCard({ src, label, alt }) {
  return (
    <div className="flex overflow-hidden flex-col text-base tracking-normal leading-tight text-white whitespace-nowrap max-w-[234px]">
      <div className="flex overflow-hidden relative flex-col items-start w-full aspect-square">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-cover absolute inset-0 size-full"
        />
        <div
          role="text"
          tabIndex="0"
          className="absolute bottom-0 left-0 px-2 py-2 bg-yellow-400"
        >
          {label}
        </div>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageCard;