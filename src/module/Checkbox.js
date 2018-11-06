import React from 'react'
import createElement from "../utils/createElement";
import EL from "./EL";
import {sdm} from "./styles";
import getUniqueIndex from './getUniqueIndex'
import variables from "./variables";

const NativeCheckbox = createElement({
  name: 'Input', as: 'input', css: [`
    position: absolute;
    z-index: -1;
    opacity: 0;
  `], props: {type: 'checkbox'}
})

class Checkbox extends React.Component {

  componentWillMount () {
    this.uniqueIndex = getUniqueIndex()
  }

  render () {
    const {id, ...rest} = this.props;
    const labelId = id || 'tui-checkbox-' + this.uniqueIndex
    return <EL css={[...sdm, `
        display: inline-block;
        position:relative;
        input[type="checkbox"]:checked + label::after {
          content: "";
        };
        input[type="checkbox"]:hover + label::before {
          border-color: ${variables.linesColorHover};
        };
        input[type="checkbox"]:focus + label::before {
          border-color: ${variables.focusColor};
          box-shadow: 0 0 0 ${variables.linesSize} ${variables.focusColor};
          outline: none;
        };
        input[type="checkbox"]:active + label::before {
          border-color: ${variables.focusColor};
          box-shadow: 0 0 0 ${variables.linesSize} ${variables.focusColor};
        };
        input[type="checkbox"]:disabled + label::before {
          border-color: ${variables.linesColor};
          background-color: ${variables.inputsBackgroundColorDisabled};
          box-shadow: none;
          cursor: not-allowed;
        };
      `]}>
      <NativeCheckbox id={labelId} {...rest}/>
      <EL as="label" css={[`
        user-select: none;
        display: inline-block;
        min-width: 18px;
        cursor: pointer;
        &::before {
          background-color: ${variables.inputsBackgroundColor};
          content: "";
          display: block;
          position: absolute;
          height: 16px;
          width: 16px;
          border: ${variables.linesSize} ${variables.linesStyle} ${variables.linesColor};
          border-radius: ${variables.radius};
        };
        &::after {
          top:4px;
          left:4px;
          position: absolute;
          content: none;
          display: block;
          height: 5px;
          width: 8px;
          border-left: 2px solid;
          border-bottom: 2px solid;
          border-color: ${variables.textColor};
          transform: rotate(-45deg);
        };
      `]} htmlFor={labelId}>&nbsp;</EL>
    </EL>;
  }
}

export default Checkbox