import React from "react";

import { HeaderContainer, TextContainer } from "./style";
import logo from "../../ui/assets/img/logo-fte.png";

export const Header = ({ children }) => (
  <HeaderContainer>
    <div className="logo-wrapper">
      <img src={logo} alt="logo" />
    </div>
    <TextContainer>
      <h2>FLAT EARTH ESPORTS</h2>
      <h1>AVATAR GENERATOR</h1>
    </TextContainer>
  </HeaderContainer>
);

export default Header;
