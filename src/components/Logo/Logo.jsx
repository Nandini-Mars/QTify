import React from "react";
import LogoImage from "../../assets/logo.png";
import "./LogoStyles.css"

export default function Logo() {
  return <img className="logo" src={LogoImage} alt="logoImage" />;
}
