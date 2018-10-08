import settings from "./settings";
import createElement from "../utils/createElement";

const Img = createElement({
  name: 'Img', as: 'img', css: [`
  display: block; 
  width: calc(100% - ${settings.spaces[2]});;
  height: auto;
`]
})

export default Img