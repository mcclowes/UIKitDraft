import settings from "./settings";
import createElement from "../utils/createElement";

const LineY = createElement({
  name: 'LineY',
  css: [
    'm0',
    'ml2',
    'mtn2',
    {
      borderColor: settings.colors.lines,
      borderStyle: settings.lines.style,
      borderWidth: `0 ${settings.lines.size} 0 0`
    }
  ]
})

export default LineY