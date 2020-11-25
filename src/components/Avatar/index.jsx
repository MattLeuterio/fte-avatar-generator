import React from "react";

import { ImageWrapper, TextWrapper, NamePlayer, LogoWrapper } from "./style";
import logo_W from "../../ui/assets/img/logo-fte-W.png";

const Avatar = React.forwardRef((props, ref) => (
  <ImageWrapper>
    <div style={props.style} ref={ref}>
      <TextWrapper>
        <NamePlayer>{props.name}</NamePlayer>
      </TextWrapper>
      <LogoWrapper>
        <img src={logo_W} alt="logo white" />
      </LogoWrapper>
    </div>
  </ImageWrapper>
));

export default Avatar;
