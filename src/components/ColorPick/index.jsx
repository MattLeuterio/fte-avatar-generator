import React, { useEffect, useState, useRef } from "react";
import reactCSS from "reactcss";
import { ChromePicker } from "react-color";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

import {
  ColorPickWrapper,
  SettingsWrapper,
  Swatch,
  Popover,
  Cover,
  SwatchWrapper,
  InputContainer,
  ButtonsContainer,
} from "./style";
import iconInput from "../../ui/assets/img/icon-input.svg";
import download from "../../ui/assets/img/icon-download.svg";
import Avatar from "../Avatar";

const defaultColor = {
  color: {
    r: "41",
    g: "242",
    b: "156",
    a: "1",
  },
  color2: {
    r: "18",
    g: "176",
    b: "230",
    a: "1",
  },
};

const defaultName = "Your Name";

const ColorPick = () => {
  const [displayColor, setDisplayColor] = useState(false);
  const [displayColor2, setDisplayColor2] = useState(false);
  const [colors, setColors] = useState(defaultColor.color);
  const [colors2, setColors2] = useState(defaultColor.color2);
  const [name, setName] = useState(defaultName);

  const componentRef = useRef();

  useEffect(() => {}, []);

  const handleClick = (type) => {
    if (type === "first") {
      setDisplayColor2(false);
      setDisplayColor(!displayColor);
    } else {
      setDisplayColor(false);
      setDisplayColor2(!displayColor2);
    }
  };

  const handleClose = () => {
    setDisplayColor(false);
    setDisplayColor2(false);
  };

  const handleChange = (color) => {
    setColors(color.rgb);
  };
  const handleChange2 = (color) => {
    setColors2(color.rgb);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value === "") setName(defaultName);
  };

  const handleDownload = () => {
    window.scrollTo(0, 0);
    exportComponentAsJPEG(componentRef, { fileName: `${name}.FTE.jpeg` });
  };
  const styles = reactCSS({
    default: {
      color: {
        width: "30px",
        height: "15px",
        borderRadius: "5px",
        marginRight: "10px",
        background: `rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a})`,
      },
      color2: {
        width: "30px",
        height: "15px",
        borderRadius: "5px",
        background: `rgba(${colors2.r}, ${colors2.g}, ${colors2.b}, ${colors2.a})`,
      },
      imageBackground: {
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(
          144deg, 
          rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a}) 10%, 
          rgba(${colors2.r}, ${colors2.g}, ${colors2.b}, ${colors2.a}) 80%
        )`,
      },
    },
  });

  return (
    <ColorPickWrapper>
      <Avatar
        ref={componentRef}
        name={name.toUpperCase()}
        style={styles.imageBackground}
      />
      <SettingsWrapper>
        <h3>Pick Colors</h3>
        <SwatchWrapper>
          <Swatch onClick={() => handleClick("first")}>
            <div style={styles.color} />
          </Swatch>
          <Swatch onClick={() => handleClick("second")}>
            <div style={styles.color2} />
          </Swatch>
        </SwatchWrapper>
        {displayColor && (
          <Popover>
            <Cover onClick={handleClose} />
            <ChromePicker color={colors} onChange={handleChange} />
          </Popover>
        )}
        {displayColor2 && (
          <Popover>
            <Cover onClick={handleClose} />
            <ChromePicker color={colors2} onChange={handleChange2} />
          </Popover>
        )}
        <InputContainer>
          <img src={iconInput} className="icon" alt="icon input" />
          <input
            type="text"
            className="input"
            placeholder="Your name"
            onChange={(e) => handleChangeName(e)}
            maxLength="15"
          />
        </InputContainer>
        <ButtonsContainer>
          <button onClick={() => handleDownload()}>
            <img src={download} alt="icon download" /> JPEG
          </button>
        </ButtonsContainer>
      </SettingsWrapper>
    </ColorPickWrapper>
  );
};

export default ColorPick;
