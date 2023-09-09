import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Whatsapp, Instagram, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div>Copyright &copy; Tüm Hakları Saklıdır</div>
      <div className="social">
        <Link to="/">
          <Facebook />
        </Link>
        <Link to="/">
          <Twitter />
        </Link>
        <Link to="/">
          <Instagram />
        </Link>
        <Link to="/">
          <Whatsapp />
        </Link>
      </div>
      
    </div>
  );
};

export default Footer;
