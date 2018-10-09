import variables from "./variables";
import createElement from "../utils/createElement";

const LineX = createElement({
  name: 'LineX',
  css: [
    'm0',
    'mb2',
    'mrn2',
    {
      borderColor: variables.linesColor,
      borderStyle: variables.linesStyle,
      borderWidth: `0 0 ${variables.linesSize} 0`
    }
  ]
})

export default LineX