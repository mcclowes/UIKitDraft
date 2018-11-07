import {sdp} from "./helpers/styles";

import createElement from "../utils/createElement";
import styled from 'react-emotion'
import variables from "./helpers/variables";

const Area = styled('div')`
  boxSizing: 'border-box',
  borderColor: variables.linesColor,
  backgroundColor: variables.secondaryBackgroundColor,
  borderStyle: variables.linesStyle,
  borderWidth: variables.linesSize,
  borderRadius: variables.radius
`

export default Area