import {cx, css as cssFn} from "emotion";

import React from "react";
import spacing from "./helpers/spacing";
import styled from 'react-emotion'

const Element = ({css = [], as = 'div', className = false, ...rest}) => {
  const cssInput = Array.isArray(css) ? css : [css]
  
  const classes = cssInput.map((c) => {
    if (typeof c === 'string' && c.indexOf('css-')===0) {
      return c
    } else if (typeof c === 'string' && spacing[c]) {
      return spacing[c]
    } else {
      return cssFn(c)
    }
  })

  return (
    <>
      {
        React.createElement(
          as,
          {
            className: cx(
              className,
              ...classes
            ),
            ...rest
          }
        )
      }
    </>
  )
}

export default Element