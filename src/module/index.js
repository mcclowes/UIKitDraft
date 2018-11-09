import {injectGlobal} from 'emotion'
import {sdp} from "./helpers/styles";

import A from './A'
import Area from "./Area";
import Button from './Button'
import Content from './Content'
import Checkbox from './Checkbox'
import Element from './Element'
import Img from "./Img";
import Input from './Input'
import LineX from "./LineX";
import LineY from "./LineY";
import Radio from './Radio'
import Select from './Select'
import TextArea from "./TextArea";
import createElement from "../utils/createElement";
import variables from "./helpers/variables";
import styled from 'react-emotion'

const W = styled('div')`

`;

const H1 = styled('h1')`
  color: ${variables.headersColor};
  font-size:${variables.textSize6}; 
  margin: 0;
  padding: 0.5rem;
`;

const H2 = styled('h2')`
  color: ${variables.headersColor};
  font-size:${variables.textSize5}; 
  margin: 0;
  padding: 0.5rem;
`;

const H3 = styled('h3')`
  color: ${variables.headersColor};
  font-size:${variables.textSize4}; 
  margin: 0;
  padding: 0.5rem;
`;

const H4 = styled('h4')`
  color: ${variables.headersColor};
  font-size:${variables.textSize3}; 
  margin: 0;
  padding: 0.5rem;
`;

const H5 = styled('h5')`
  color: ${variables.headersColor};
  font-size:${variables.textSize2}; 
  margin: 0;
  padding: 0.5rem;
`;

const H6 = styled('h6')`
  color: ${variables.headersColor};
  font-size:${variables.textSize1}; 
  margin: 0;
  padding: 0.5rem;
`;


const Option = styled('option')``

const Label = styled('label')`
  display: inline-block;
  padding: 0.5rem;
`;

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
  * {
    box-sizing: border-box;
  }

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
  A,
  Area,
  Button,
  Checkbox,
  Content,
  Element,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Img,
  Input,
  Label,
  LineX,
  LineY,
  Option,
  Radio,
  Select,
  TextArea,
  W,
}