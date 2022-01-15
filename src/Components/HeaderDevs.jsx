import React from "react";
import "../Assets/Styles/styles.css";
import "../Assets/Styles/HeaderDevs.css";
import LogoDevs from "../Assets/img/Group 2.png";
import LogoName from "../Assets/img/Vector-1.png";
import LogoName2 from "../Assets/img/Vector.png";
import Avatar from "../Assets/img/image 2.png";

const HeaderDevs = () => {
  return (
    <header className="containerHeader">
      <div className="headerDevs">
        <div className="headerAvatar">
          <img
            className="imgAvatar"
            src={Avatar}
            alt="Logo Devs United"
            type="text"
          />
        </div>
        <div className="headerLogo">
          <img
            className="imgLogo"
            src={LogoDevs}
            alt="Logo Devs United"
            type="text"
          />
        </div>
        <div className="headerName">
          <img
            className="imgName"
            src={LogoName}
            alt="Logo Devs United"
            type="text"
          />
          <img
            className="imgName"
            src={LogoName2}
            alt="Logo Devs United"
            type="text"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDevs;
