import React from "react";
import "./Footer.css";
import footerBg from "../../accets/FooterPhoto/footerBg.png";
const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_grid_div">
        <div>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="footer_blank_div"></div>
      <div className="footer_copyright_div">
        <p>© Movie Hive 2025</p>
      </div>
      {/* <img className="footerBg" src={footerBg} alt="" /> */}
    </div>
  );
};

export default Footer;
