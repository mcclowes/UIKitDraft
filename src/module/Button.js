import createElement from "../utils/createElement";
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
    border-radius: ${variables.radius};
  `]
})

export default Button


