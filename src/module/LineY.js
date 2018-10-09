import variables from "./variables";
import createElement from "../utils/createElement";

const LineY = createElement({
  name: 'LineY',
  css: [
    'm0',
    'ml2',
    'mtn2',
    {
      borderColor: variables.linesColor,
      borderStyle: variables.linesStyle,
      borderWidth: `0 ${variables.linesSize} 0 0`
    }
  ]
})

export default LineY