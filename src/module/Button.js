import createElement from "../utils/createElement";
import settings from "./settings";
import {shade, tint} from "polished/lib/index";

const Button = createElement({
  name: 'Button', as: 'button', css: ['py1', 'px2', `
    display: inline-block;
    line-height: normal;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    border: ${settings.lines.size} ${settings.lines.style} ${settings.colors.primary};
    background-color: ${settings.colors.primary};
    font-family: inherit;
    font-size: 85%;
    font-weight: bold;
    color: ${settings.text.invertedColor};
    &:hover {
      background-color: ${shade(1 - 0.12, settings.colors.primary)};
      border-color: ${shade(1 - 0.12, settings.colors.primary)};
    };
    &:focus {
      border-color: ${tint(1 - 0.5, settings.colors.primary)};
      box-shadow: 0 0 0 1px ${tint(1 - 0.5, settings.colors.primary)};
      outline: none;
    };
    &:active {
      background-color: ${shade(1 - 0.22, settings.colors.primary)};
    };
    &:disabled {
      background-color: ${tint(1 - 0.7, settings.colors.primary)};
      border-color: ${tint(1 - 0.7, settings.colors.primary)};
      cursor: not-allowed;
    };
    border-radius: ${settings.radius.size};
  `]
})

export default Button