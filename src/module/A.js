import createElement from "../utils/createElement";
import {shade, tint} from "polished/lib/index";
import variables from "./variables";

const A = createElement({
  name: 'A', as: 'a', css: ['m0', `
    color: ${variables.primaryColor};
    text-decoration: none;
    border-radius: ${variables.radius};
    &:hover {
      color: ${shade(1 - 0.12, variables.primaryColor)};
    };
    &:active {
      color: ${shade(1 - 0.22, variables.primaryColor)};
    };
    &:focus {
      outline: none;
      border-color: ${variables.primaryColor};
      box-shadow: 0 0 0 2px ${tint(1 - 0.5, variables.primaryColor)};
    }
  `]
})

export default A