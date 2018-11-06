import createElement from "../utils/createElement";
import {inputs} from "./helpers/styles";
import variables from "./helpers/variables";

const TextArea = createElement({
  name: 'TextArea', as: 'textarea', css: ['p1', inputs, `
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - ${variables.spaceSize2});
  `]
})

export default TextArea