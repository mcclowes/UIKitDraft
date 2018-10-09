import variables from "./variables";
import createElement from "../utils/createElement";
import {sdp} from "./styles";

const Area = createElement({
  name: 'Area',
  css: [
    ...sdp,
    {
      boxSizing: 'border-box',
      borderColor: variables.linesColor,
      backgroundColor: variables.secondaryBackgroundColor,
      borderStyle: variables.linesStyle,
      borderWidth: variables.linesSize,
      borderRadius: variables.radius
    }
  ]
})

export default Area