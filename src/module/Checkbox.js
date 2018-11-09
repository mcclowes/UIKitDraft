import { sdm } from "./helpers/styles";

import Element from "./Element";
import React from "react";
import createElement from "../utils/createElement";
import getUniqueIndex from "./helpers/getUniqueIndex";
import variables from "./helpers/variables";
import styled from 'react-emotion'

const NativeCheckbox = styled('input')`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &input[type="checkbox"]{
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
`;

const CheckboxWrapper = styled('div')`
  display: inline-block;
  position:relative;
  padding: 0.5rem;
  vertical-align: sub;
`

const Label = styled('label')`
  user-select: none;
  display: inline-block;
  min-width: 18px;
  cursor: pointer;

  &::before {
    background-color: ${variables.inputsBackgroundColor};
    content: "";
    display: block;
    height: 16px;
    position: absolute;
    width: 16px;
    border: ${variables.linesSize} ${variables.linesStyle} ${
        variables.linesColor
      };
    border-radius: ${variables.radius};
  };

  &::after {
    border-bottom: 2px solid;
    border-color: ${variables.textColor};
    border-left: 2px solid;
    content: none;
    display: block;
    height: 5px;
    left:4px;
    position: absolute;
    top:4px;
    transform: rotate(-45deg);
    width: 8px;
  };
`

class Checkbox extends React.Component {
  componentWillMount() {
    this.uniqueIndex = getUniqueIndex();
  }

  render() {
    const { id, ...rest } = this.props;
    const labelId = id || "tui-checkbox-" + this.uniqueIndex;
    
    return (
      <CheckboxWrapper>
        <NativeCheckbox type="checkbox" id={labelId} {...rest} />

        <Label
          htmlFor={labelId}
        >
          &nbsp;
        </Label>
      </CheckboxWrapper>
    );
  }
}

export default Checkbox;
