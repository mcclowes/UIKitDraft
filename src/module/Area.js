import settings from "./settings";
import createElement from "../utils/createElement";
import {sdp} from "./styles";

const Area = createElement({
  name: 'Area',
  css: [
    ...sdp,
    {
      boxSizing: 'border-box',
      borderColor: settings.colors.lines,
      backgroundColor: settings.colors.secondaryBackground,
      borderStyle: settings.lines.style,
      borderWidth: settings.lines.size,
      borderRadius: settings.radius.size,
    }
  ]
})

export default Area