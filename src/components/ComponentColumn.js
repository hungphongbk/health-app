import PropTypes from "prop-types";

const ComponentColumn = ({ className = "" }) => {
  return (
    <div
      className={`h-[14rem] w-[14.625rem] flex flex-col items-start justify-start pt-[7.312rem] px-[0rem] pb-[0.125rem] box-border relative gap-[0.312rem] text-left text-[0.938rem] text-white font-inter ${className}`}
    >
      <div className="w-[14.625rem] h-[9rem] !m-[0] absolute top-[0rem] left-[0rem] flex flex-row items-start justify-start z-[0]">
        <img
          className="h-[9rem] w-[14.625rem] relative overflow-hidden shrink-0 object-cover z-[0]"
          loading="lazy"
          alt=""
        />
        <div className="h-[1.5rem] w-[9rem] absolute !m-[0] bottom-[0rem] left-[0rem] bg-gold z-[1]" />
      </div>
      <div className="w-[8.5rem] h-[1.875rem] flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0rem] box-border z-[4]">
        <div className="h-[1.875rem] w-[8.063rem] relative leading-[1.875rem] whitespace-pre-wrap inline-block shrink-0">
          2021.05.17 23:25
        </div>
      </div>
      <div className="w-[14.5rem] h-[4.375rem] flex flex-col items-start justify-start z-[2] text-darkslategray-100 font-hiragino-kaku-gothic-pro">
        <div className="w-[14.5rem] h-[3rem] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[1]">
          <h3 className="m-0 h-[3rem] w-[14.5rem] relative text-inherit tracking-[0.08px] leading-[1.375rem] font-normal font-[inherit] inline-block shrink-0">
            魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
          </h3>
        </div>
        <div className="w-[14.5rem] h-[1.5rem] overflow-hidden shrink-0 flex flex-row items-start justify-start z-[2] mt-[-0.125rem] text-[0.75rem] text-darkorange-100">
          <div className="h-[1.5rem] w-[14.563rem] relative tracking-[0.06px] leading-[1.375rem] whitespace-pre-wrap inline-block shrink-0">
            #魚料理 #和食 #DHA
          </div>
        </div>
      </div>
    </div>
  );
};

ComponentColumn.propTypes = {
  className: PropTypes.string,
};

export default ComponentColumn;
