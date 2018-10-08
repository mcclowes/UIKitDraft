import React from 'react'
import createElement from "../utils/createElement";
import EL from "./EL";
import settings from "./settings";
import {shade} from "polished";
import {tint} from "polished/lib/index";
import {sdm} from "./styles";
import getUniqueIndex from './getUniqueIndex'

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
          border-color: ${shade(1 - 0.12, settings.colors.lines)};
        };
        input[type="checkbox"]:focus + label::before {
          border-color: ${tint(1 - 0.5, settings.colors.primary)};
          box-shadow: 0 0 0 ${settings.lines.size} ${tint(1 - 0.5, settings.colors.primary)};
          outline: none;
        };
        input[type="checkbox"]:active + label::before {
          border-color: ${tint(1 - 0.5, settings.colors.primary)};
          box-shadow: 0 0 0 ${settings.lines.size} ${tint(1 - 0.5, settings.colors.primary)};
        };
        input[type="checkbox"]:disabled + label::before {
          border-color: ${settings.colors.lines};
          background-color: ${shade(1 - 0.04, settings.inputs.background)};
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
          background-color: ${settings.inputs.background};
          content: "";
          display: block;
          position: absolute;
          height: 16px;
          width: 16px;
          border: ${settings.lines.size} ${settings.lines.style} ${settings.colors.lines};
          border-radius: ${settings.radius.size};
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
          border-color: ${settings.text.color};
          transform: rotate(-45deg);
        };
      `]} htmlFor={labelId}>&nbsp;</EL>
    </EL>;
  }
}

export default Checkbox