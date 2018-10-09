import React from 'react'
import createElement from "../utils/createElement";
import EL from "./EL";
import variables from "./variables";
import {shade} from "polished";
import {tint} from "polished/lib/index";
import {sdm} from "./styles";
import getUniqueIndex from "./getUniqueIndex";

const NativeRadio = createElement({
  name: 'Input', as: 'input', css: [`
    position: absolute;
    z-index: -1;
    opacity: 0;
  `], props: {type: 'radio'}
})

class Radio extends React.Component {

  componentWillMount () {
    this.uniqueIndex = getUniqueIndex()
  }

  render () {
    const {id, ...rest} = this.props;
    const labelId = id || 'tui-radio-' + this.uniqueIndex
    return <EL css={[...sdm, `
        display: inline-block;
        position:relative;
        input[type="radio"]:checked + label::after {
          content: "";
        };
        input[type="radio"]:hover + label::before {
          border-color: ${shade(1 - 0.12, variables.linesColor)};
        };
        input[type="radio"]:focus + label::before {
          border-color: ${tint(1 - 0.5, variables.primaryColor)};
          box-shadow: 0 0 0 ${variables.linesSize} ${tint(1 - 0.5, variables.primaryColor)};
          outline: none;
        };
        input[type="radio"]:active + label::before {
          border-color: ${tint(1 - 0.5, variables.primaryColor)};
          box-shadow: 0 0 0 ${variables.linesSize} ${tint(1 - 0.5, variables.primaryColor)};
        };
        input[type="radio"]:disabled + label::before {
          border-color: ${variables.linesColor};
          background-color: ${shade(1 - 0.04, variables.inputsBackgroundColor)};
          box-shadow: none;
          cursor: not-allowed;
        };
      `]}>
      <NativeRadio id={labelId} {...rest}/>
      <EL as="label" css={[`
      user-select: none;
      display: inline-block;
      width: 18px;
      cursor: pointer;
      &::before {
        background-color: ${variables.inputsBackgroundColor};
        content: "";
        display: block;
        position: absolute;
        height: 16px;
        width: 16px;
        border: ${variables.linesSize} ${variables.linesStyle} ${variables.linesColor};
        border-radius: 50%;
      };
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
      };
    `]} htmlFor={labelId}>&nbsp;</EL>
    </EL>
  }
}

export default Radio