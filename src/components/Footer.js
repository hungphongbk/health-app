// src/components/Footer.js
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`w-full h-[8rem] text-left text-[0.688rem] text-white bg-darkslategray-100 font-hiragino-kaku-gothic-pro ${className}`}>
      <div className="flex justify-around items-center h-full">
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          会員登録
        </h3>
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          運営会社
        </h3>
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          利用規約
        </h3>
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          個人情報の取扱について
        </h3>
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          特定商取引法に基づく表記
        </h3>
        <h3 className="text-inherit tracking-[0.03px] leading-[1rem] font-normal">
          お問い合わせ
        </h3>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;