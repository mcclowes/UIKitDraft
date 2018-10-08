import createElement from "../utils/createElement";
import settings from "./settings";
import {shade, tint} from "polished/lib/index";

const A = createElement({
  name: 'A', as: 'a', css: ['m0', `
    color: ${settings.colors.primary};
    text-decoration: none;
    border-radius: ${settings.radius.size};
    &:hover {
      color: ${shade(1 - 0.12, settings.colors.primary)};
    };
    &:active {
      color: ${shade(1 - 0.22, settings.colors.primary)};
    };
    &:focus {
      outline: none;
      border-color: ${settings.colors.primary};
      box-shadow: 0 0 0 2px ${tint(1 - 0.5, settings.colors.primary)};
    }
  `]
})

export default A