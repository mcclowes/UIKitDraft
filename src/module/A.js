import createElement from "../utils/createElement";
import variables from "./helpers/variables";
import styled from 'react-emotion'

const Link = styled('div')`
  color: ${variables.primaryColor};
  text-decoration: none;
  border-radius: ${variables.radius};
  
  &:hover {
    color: ${variables.primaryColorHover};
  };
  
  &:active {
    color: ${variables.primaryColorActive};
  };
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${1 + variables.linesWidth + variables.linesSizeUnit} ${variables.focusColor};
  }
`

export default Link