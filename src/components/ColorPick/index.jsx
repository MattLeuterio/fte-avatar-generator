import React, { useEffect, useState } from "react";
import reactCSS from "reactcss";
import { ChromePicker } from "react-color";
import {
  ColorPickWrapper,
  PickersWrapper,
  ImageWrapper,
  Swatch,
  Popover,
  Cover,
  SwatchWrapper,
} from "./style";

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

const ColorPick = () => {
  const [displayColor, setDisplayColor] = useState(false);
  const [displayColor2, setDisplayColor2] = useState(false);
  const [colors, setColors] = useState(defaultColor.color);
  const [colors2, setColors2] = useState(defaultColor.color2);

  useEffect(() => {}, []);

  const handleClick = () => {
    setDisplayColor2(false);
    setDisplayColor(!displayColor);
  };
  const handleClick2 = () => {
    setDisplayColor(false);
    setDisplayColor2(!displayColor2);
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
        background: `linear-gradient(
          144deg, 
          rgba(${colors.r}, ${colors.g}, ${colors.b}, ${colors.a}) 20%, 
          rgba(${colors2.r}, ${colors2.g}, ${colors2.b}, ${colors2.a}) 80%
        )`,
      },
    },
  });

  return (
    <ColorPickWrapper>
      <ImageWrapper>
        <div style={styles.imageBackground}></div>
      </ImageWrapper>
      <PickersWrapper>
        <h3>Pick Colors</h3>
        <SwatchWrapper>
          <Swatch onClick={handleClick}>
            <div style={styles.color} />
          </Swatch>
          <Swatch onClick={handleClick2}>
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
      </PickersWrapper>
    </ColorPickWrapper>
  );
};

export default ColorPick;
