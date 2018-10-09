import {shade} from "polished";
import {css} from "emotion";
import variables from "./variables";
import {tint} from "polished";

const sdm = ['m0', 'mb2', 'ml2'] //single direction margin
const sdp = ['p0', 'pt2', 'pr2'] //single direction padding

const inputs = css(`
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: normal;
  box-shadow: none;
  background-color: ${variables.inputsBackgroundColor};
  border-color: ${variables.linesColor};
  border-style: ${variables.linesStyle};
  border-width: ${variables.linesSize};
  border-radius: ${variables.radius};
  &:hover {
    border-color: ${shade(1 - 0.12, variables.linesColor)};
  };
  &:focus {
    border-color: ${tint(1 - 0.5, variables.primaryColor)};
    box-shadow: 0 0 0 ${variables.linesSize} ${tint(1 - 0.5, variables.primaryColor)};
    outline: none;
  };
  &:active {
    border-color: ${tint(1 - 0.5, variables.primaryColor)};
  };
  &:disabled {
    border-color: ${variables.linesColor};
    background-color: ${shade(1 - 0.04, variables.inputsBackgroundColor)};
    cursor: not-allowed;
  };
`)

export {sdm, sdp, inputs}
