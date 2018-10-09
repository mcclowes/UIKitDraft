import createElement from "../utils/createElement";
import {inputs} from "./styles";
import variables from "./variables";

const Input = createElement({
  name: 'Input', as: 'input', css: ['p1', inputs, `
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - ${variables.spaces[2]});
  `]
})

export default Input