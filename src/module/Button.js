import createElement from "../utils/createElement";
import {shade, tint} from "polished/lib/index";
import variables from "./variables";

const Button = createElement({
  name: 'Button', as: 'button', css: ['py1', 'px2', `
    display: inline-block;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    border: ${variables.linesSize} ${variables.linesStyle} ${variables.primaryColor};
    background-color: ${variables.primaryColor};
    font-family: inherit;
    font-size: 85%;
    font-weight: bold;
    color: ${variables.invertedTextColor};
    &:hover {
      background-color: ${shade(1 - 0.12, variables.primaryColor)};
      border-color: ${shade(1 - 0.12, variables.primaryColor)};
    };
    &:focus {
      border-color: ${tint(1 - 0.5, variables.primaryColor)};
      box-shadow: 0 0 0 1px ${tint(1 - 0.5, variables.primaryColor)};
      outline: none;
    };
    &:active {
      background-color: ${shade(1 - 0.22, variables.primaryColor)};
    };
    &:disabled {
      background-color: ${tint(1 - 0.7, variables.primaryColor)};
      border-color: ${tint(1 - 0.7, variables.primaryColor)};
      cursor: not-allowed;
    };
    border-radius: ${variables.radius};
  `]
})

export default Button