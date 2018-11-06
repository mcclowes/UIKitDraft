import {injectGlobal} from 'emotion'
import {sdp} from "./helpers/styles";

import A from './A'
import Area from "./Area";
import Button from './Button'
import Checkbox from './Checkbox'
import EL from './EL'
import Img from "./Img";
import Input from './Input'
import LineX from "./LineX";
import LineY from "./LineY";
import Radio from './Radio'
import Select from './Select'
import TextArea from "./TextArea";
import createElement from "../utils/createElement";
import variables from "./helpers/variables";

const W = createElement({name: 'W', as: 'div', css: [...sdp]})
const C = createElement({name: 'C', as: 'div', css: ['display:inline-block;']})

const H1 = createElement({name: 'H1', as: 'h1', css: [`font-size:${variables.textSize6}; color: ${variables.headersColor}`]})
const H2 = createElement({name: 'H2', as: 'h2', css: [`font-size:${variables.textSize5}; color: ${variables.headersColor}`]})
const H3 = createElement({name: 'H3', as: 'h3', css: [`font-size:${variables.textSize4}; color: ${variables.headersColor}`]})
const H4 = createElement({name: 'H4', as: 'h4', css: [`font-size:${variables.textSize3}; color: ${variables.headersColor}`]})
const H5 = createElement({name: 'H5', as: 'h5', css: [`font-size:${variables.textSize2}; color: ${variables.headersColor}`]})
const H6 = createElement({name: 'H6', as: 'h6', css: [`font-size:${variables.textSize1}; color: ${variables.headersColor}`]})

const Option = createElement({name: 'Option', as: 'option'})
const Label = createElement({name: 'Label', as: 'label', css: [`display: inline-block;`]})

//todo consistent box sizing
//consistent outline/border between buttons and inputs
//todo input validation?
//todo try to customise and see what breaks
//todo per each component test they nac receive override props and styles
//todo document that importing babel polyfill is needed
//todo hover active on areas
//todo fix fonts

const getGoogleFontName = (name) => {
  return name.split('"').join().split('\'').join().split(' ').join('+')
}

injectGlobal`
  @import url('http://fonts.googleapis.com/css?family=${getGoogleFontName(variables.fontName)}');
  body {
    font-size: ${variables.textSize3};
    color: ${variables.textColor};
    font-family: '${variables.fontName}', serif;
    background-color:${variables.primaryBackgroundColor};
    margin: 0;
  }
`

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