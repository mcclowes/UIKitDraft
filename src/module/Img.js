import createElement from "../utils/createElement";
import variables from "./variables";

const Img = createElement({
  name: 'Img', as: 'img', css: [`
  display: block; 
  width: calc(100% - ${variables.spaces[2]});;
  height: auto;
`]
})

export default Img