import Element from "./Element";
import React from 'react'
import createElement from "../utils/createElement";
import getUniqueIndex from "./helpers/getUniqueIndex";
import styled from 'react-emotion'
import variables from "./helpers/variables";
import {sdm} from "./helpers/styles";

const NativeRadio = styled('radio')`
  position: absolute;
  z-index: -1;
  opacity: 0;
`

const RadioWrapper = styled('div')`
  display: inline-block;
  position:relative;
  
  input[type="radio"]{
    &:checked + label::after {
      content: "";
    }
  
    &:hover + label::before {
      border-color: ${variables.linesColorHover};
    }
    
    &:focus + label::before {
      border-color: ${variables.focusColor};
      box-shadow: 0 0 0 ${variables.linesSize} ${variables.focusColor};
      outline: none;
    }
    
    &:active + label::before {
      border-color: ${variables.focusColor};
      box-shadow: 0 0 0 ${variables.linesSize} ${variables.focusColor};
    }
    
    &:disabled + label::before {
      border-color: ${variables.linesColor};
      background-color: ${variables.inputsBackgroundColorDisabled};
      box-shadow: none;
      cursor: not-allowed;
    }
  }
`

const LabelWrapper = styled('label')`
  cursor: pointer;
  display: inline-block;
  user-select: none;
  width: 18px;

  &::before {
    background-color: ${variables.inputsBackgroundColor};
    border-radius: 50%;
    border: ${variables.linesSize} ${variables.linesStyle} ${variables.linesColor};
    content: "";
    display: block;
    height: 16px;
    position: absolute;
    width: 16px;
  }

  &::after {
    top:5px;
    left:5px;
    position: absolute;
    content: none;
    display: block;
    height: 8px;
    width: 8px;
    background-color: ${variables.textColor};
    border-radius: 50%;
  }
`

class Radio extends React.Component {
  componentWillMount () {
    this.uniqueIndex = getUniqueIndex()
  }

  render () {
    const {id, ...rest} = this.props;
    const labelId = id || 'tui-radio-' + this.uniqueIndex

    return (
      <RadioWrapper>
        <NativeRadio id={labelId} {...rest}/>

        <LabelWrapper htmlFor={labelId}>&nbsp;</LabelWrapper>
      </RadioWrapper>
    )
  }
}

export default Radio