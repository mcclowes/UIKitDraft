import createElement from "../utils/createElement";
import {inputs} from "./styles";
import variables from "./variables";

const Select = createElement({
  name: 'Select', as: 'select', css: ['p1', inputs, `
    appearance:none;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - ${variables.spaces[2]});
    padding-right: 24px; /*avoids overlapping the icon with the text (and hiding the icon on explorer)*/
    &:focus::-ms-value {
      color: ${variables.textColor};
      background-color: ${variables.inputsBackgroundColor};
    };
    &::-ms-expand {
      display: none;
    }
    /*begin - removes dotted lines in firefox*/
    color: ${variables.textColor}; /*fallback for browsers not supporting rgba (next line)*/
    color: rgba(0,0,0,0);
    text-shadow: 0 0 0 ${variables.textColor};
    /*end - removes dotted lines in firefox*/
    background: ${variables.inputsBackgroundColor} url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 4 5'%3E%3Cpath fill='%23${variables.textColor}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 6px center
  `]
})

export default Select