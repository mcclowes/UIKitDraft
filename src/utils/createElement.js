import { sdm } from "../module/helpers/styles";

import Element from "../module/Element";
import React from "react";

export default ({ name, as = "div", css = [], props }) => {
  const cssDefinition = css;

  const element = ({ children, css = [], ...rest }) => {
    return (
      <Element
        as={as}
        css={[...sdm, ...cssDefinition, ...css]}
        {...props}
        {...rest}
      >
        {children}
      </Element>
    );
  };

  element.displayName = name;

  return element;
};
