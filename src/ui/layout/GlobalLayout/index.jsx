import React from "react";
import { Credits } from "../../../atoms/Credit";

import { LayoutContainer } from "./style";

export const GlobalLayout = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
      <Credits />
    </LayoutContainer>
  );
};

export default GlobalLayout;
