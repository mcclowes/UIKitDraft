import EL from './EL'
import Button from './Button'
import Select from './Select'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import A from './A'
import {injectGlobal} from 'emotion'
import createElement from "../utils/createElement";
import {sdp} from "../module/styles";
import Img from "./Img";
import LineX from "./LineX";
import LineY from "./LineY";
import Area from "./Area";
import TextArea from "./TextArea";
import variables from "./variables";

const W = createElement({name: 'W', as: 'div', css: [...sdp]})
const C = createElement({name: 'C', as: 'div', css: ['display:inline-block;']})

const H1 = createElement({name: 'H1', as: 'h1', css: [`font-size:${variables.textSizes[6]};`]})
const H2 = createElement({name: 'H2', as: 'h2', css: [`font-size:${variables.textSizes[5]};`]})
const H3 = createElement({name: 'H3', as: 'h3', css: [`font-size:${variables.textSizes[4]};`]})
const H4 = createElement({name: 'H4', as: 'h4', css: [`font-size:${variables.textSizes[3]};`]})
const H5 = createElement({name: 'H5', as: 'h5', css: [`font-size:${variables.textSizes[2]};`]})
const H6 = createElement({name: 'H6', as: 'h6', css: [`font-size:${variables.textSizes[1]};`]})

const Option = createElement({name: 'Option', as: 'option'})
const Label = createElement({name: 'Label', as: 'label', css: [`display: inline-block;`]})

//todo hover active on areas
//todo input validation?
//todo input placeholders?
//todo use only border or boxshadow for input styles?
//todo replace tint and shadow with something that would survive dark/white
//todo try to make consistent tint/shadow values
//todo random unit all around e.g 2px in button shadow
//todo check/radio size and positioning depending on font-size: 16px; and or spacing? ????
//todo textarea
//todo secondary
//todo per each component test they nac receive override props and styles
//todo document that importing babel polyfill is needed
//todo fix fonts

/*
const getGoogleFontName = (name) => {
  return name.split('"').join().split('\'').join().split(' ').join('+')
}
*/

injectGlobal`
  @import url('http://fonts.googleapis.com/css?family=Lato');
  body {
    font-size: ${variables.textSizes[3]};
    color: ${variables.textColor};
    font-family: '${variables.fontName}', serif;
    background-color:${variables.primaryBackgroundColor};
    margin:0;
  }
`

//
//font-family: '${variables.text.fontName}', serif;

export {
  EL,
  W,
  C,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  Input,
  TextArea,
  Select,
  Option,
  Checkbox,
  Radio,
  Button,
  LineX,
  LineY,
  Area,
  A,
  Label
}