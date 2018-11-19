import React from "react";
import styled from 'react-emotion'
import variables from "./helpers/variables";

const ButtonInner = styled('button')`
  background-color: ${variables.primaryColor};
  border-radius: ${variables.radius};
  border: ${variables.linesSize} ${variables.linesStyle} ${
    variables.primaryColor
  };
  color: ${variables.invertedTextColor};
  cursor: pointer;
  font-family: inherit;
  font-size: 85%;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.25rem 1rem;
  
  &:hover {
    background-color: ${variables.primaryColorHover};
    border-color: ${variables.primaryColorHover};
  };
  
  &:focus {
    border-color: ${variables.focusColor};
    box-shadow: 0 0 0 1px ${variables.focusColor};
    outline: none;
  };
  
  &:active {
    background-color: ${variables.primaryColorActive};
  };
  
  &:disabled {
    background-color: ${variables.primaryColorDisabled};
    border-color: ${variables.primaryColorDisabled};
    cursor: not-allowed;
  };
`;

const ButtonWrapper = styled('div')`
  padding: 0.5rem;
  display: inline-block;
`

const Button = (props) => {
  const {children, wrapper, ...rest} = props

  const _wrapper = wrapper || ButtonWrapper

  return (
    <_wrapper>
      <ButtonInner {...rest}>
        {children}
      </ButtonInner>
    </_wrapper>
  );
};

Button.Wrapper = ButtonWrapper

export default Button;
