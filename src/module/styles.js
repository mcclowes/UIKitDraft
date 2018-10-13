import {css} from "emotion";
import variables from "./variables";
import {shade, tint} from "polished";

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
    border-color: ${variables.linesColorHover};
  };
  &:focus {
    border-color: ${variables.focusColor};
    box-shadow: 0 0 0 ${variables.linesSize} ${variables.focusColor};
    outline: none;
  };
  &:active {
    border-color: ${variables.focusColor};
  };
  &:disabled {
    border-color: ${variables.linesColor};
    background-color: ${variables.inputsBackgroundColorDisabled};
    cursor: not-allowed;
  };
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${tint(1 - 0.6, variables.textColor)};
    opacity: 1; /* Firefox */
  } 
  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${tint(1 - 0.6, variables.textColor)};
  }
  &::-ms-input-placeholder { /* Microsoft Edge */
    color: ${tint(1 - 0.6, variables.textColor)};
  }
`)

export {sdm, sdp, inputs}
