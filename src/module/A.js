import createElement from "../utils/createElement";
import variables from "./variables";

const A = createElement({
  name: 'A', as: 'a', css: ['m0', `
    color: ${variables.primaryColor};
    text-decoration: none;
    border-radius: ${variables.radius};
    &:hover {
      color: ${variables.primaryColorHover};
    };
    &:active {
      color: ${variables.primaryColorActive};
    };
    &:focus {
      outline: none;
      box-shadow: 0 0 0 ${1 + variables.linesWidth + variables.linesSizeUnit} ${variables.focusColor};
    }
  `]
})

export default A