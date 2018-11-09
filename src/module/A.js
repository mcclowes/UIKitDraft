import createElement from "../utils/createElement";
import variables from "./helpers/variables";
import styled from 'react-emotion'

const Link = styled('a')`
  border-radius: ${variables.radius};
  color: ${variables.primaryColor};
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  
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