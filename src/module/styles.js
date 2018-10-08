import {shade} from "polished";
import {css} from "emotion";
import settings from "./settings";
import {tint} from "polished";

const sdm = ['m0', 'mb2', 'ml2'] //single direction margin
const sdp = ['p0', 'pt2', 'pr2'] //single direction padding

const inputs = css(`
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: normal;
  box-shadow: none;
  background-color: ${settings.inputs.background};
  border-color: ${settings.colors.lines};
  border-style: ${settings.lines.style};
  border-width: ${settings.lines.size};
  border-radius: ${settings.radius.size};
  &:hover {
    border-color: ${shade(1 - 0.12, settings.colors.lines)};
  };
  &:focus {
    border-color: ${tint(1 - 0.5, settings.colors.primary)};
    box-shadow: 0 0 0 ${settings.lines.size} ${tint(1 - 0.5, settings.colors.primary)};
    outline: none;
  };
  &:active {
    border-color: ${tint(1 - 0.5, settings.colors.primary)};
  };
  &:disabled {
    border-color: ${settings.colors.lines};
    background-color: ${shade(1 - 0.04, settings.inputs.background)};
    cursor: not-allowed;
  };
  /* this affects default selects for some reason 😓
  &:read-only {
    background-color: ${shade(1 - 0.04, settings.inputs.background)};
    cursor: not-allowed;
  };
  */
`)

export {sdm, sdp, inputs}
