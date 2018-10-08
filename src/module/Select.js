import createElement from "../utils/createElement";
import settings from "./settings";
import {inputs} from "./styles";

const Select = createElement({
  name: 'Select', as: 'select', css: ['p1', inputs, `
    appearance:none;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - ${settings.spaces[2]});
    padding-right: 24px; /*avoids overlapping the icon with the text (and hiding the icon on explorer)*/
    &:focus::-ms-value {
      color: ${settings.text.color};
      background-color: ${settings.inputs.background};
    };
    &::-ms-expand {
      display: none;
    }
    /*begin - removes dotted lines in firefox*/
    color: ${settings.text.color}; /*fallback for browsers not supporting rgba (next line)*/
    color: rgba(0,0,0,0);
    text-shadow: 0 0 0 ${settings.text.color};
    /*end - removes dotted lines in firefox*/
    background: ${settings.inputs.background} url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 4 5'%3E%3Cpath fill='%23${settings.text.color}' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 6px center
  `]
})

export default Select