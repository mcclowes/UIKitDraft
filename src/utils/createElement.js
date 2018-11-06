import React from 'react';
import EL from "../module/EL";
import {sdm} from "../module/helpers/styles";

export default ({name, as = 'div', css = [], props}) => {
  const cssDefinition = css
  
  const element = ({children, css = [], ...rest}) => {
    return <EL as={as} css={[...sdm, ...cssDefinition, ...css]} {...props} {...rest}>
      {children}
    </EL>
  }

  element.displayName = name
  
  return element
}