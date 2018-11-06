import createElement from "../utils/createElement";
import variables from "./helpers/variables";

const Img = createElement({
  name: 'Img', as: 'img', css: [`
  display: block; 
  width: calc(100% - ${variables.spaceSize2});;
  height: auto;
`]
})

export default Img