import {inputs} from "./helpers/styles";

import styled from 'react-emotion'
import React from 'react'
import variables from "./helpers/variables";

const SelectInner = styled('select')`
  ${inputs}

  appearance:none;
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  padding-right: 24px; /*avoids overlapping the icon with the text (and hiding the icon on explorer)*/
  /*begin - removes dotted lines in firefox*/
  color: ${variables.textColor}; /*fallback for browsers not supporting rgba (next line)*/
  color: rgba(0,0,0,0);
  text-shadow: 0 0 0 ${variables.textColor};
  /*end - removes dotted lines in firefox*/
  background: ${variables.inputsBackgroundColor} url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 4 5'%3E%3Cpath fill='%23${variables.textColor}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 6px center;
  width: 100%;
  padding: 0.5rem;

  &:focus::-ms-value {
    color: ${variables.textColor};
    background-color: ${variables.inputsBackgroundColor};
  };

  &::-ms-expand {
    display: none;
  }
`
const SelectWrapper = styled('div')`
  padding: 0.5rem;
  width: calc(100% - ${variables.spaceSize2});
  display: inline-block;
`

const Select = (props) => {
  const {children, className, ...rest} = props

  return (
    <SelectWrapper className={className}>
      <SelectInner {...rest}>
        {children}
      </SelectInner>
    </SelectWrapper>
  );
};


export default Select