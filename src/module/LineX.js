import variables from "./helpers/variables";
import createElement from "../utils/createElement";
import styled from 'react-emotion'

const LineX = styled('div')`
  border-color: variables.linesColor;
  border-style: variables.linesStyle;
  border-width: 0 0 ${variables.linesSize} 0;
`

export default LineX