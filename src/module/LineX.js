import settings from "./settings";
import createElement from "../utils/createElement";

const LineX = createElement({
  name: 'LineX',
  css: [
    'm0',
    'mb2',
    'mrn2',
    {
      borderColor: settings.colors.lines,
      borderStyle: settings.lines.style,
      borderWidth: `0 0 ${settings.lines.size} 0`
    }
  ]
})

export default LineX