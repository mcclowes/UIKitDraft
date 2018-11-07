import createElement from "../utils/createElement";
import {inputs} from "./helpers/styles";
import variables from "./helpers/variables";
import styled from 'react-emotion'

const TextArea = styled('textarea')`
  ${inputs};
  display: inline-block;
  box-sizing: border-box;
  width: calc(100% - ${variables.spaceSize2});
`

export default TextArea