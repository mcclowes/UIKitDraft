import createElement from "../utils/createElement";
import settings from "./settings";
import {inputs} from "./styles";

const TextArea = createElement({
  name: 'TextArea', as: 'textarea', css: ['p1', inputs, `
    display: inline-block;
    box-sizing: border-box;
    width: calc(100% - ${settings.spaces[2]});
  `]
})

export default TextArea