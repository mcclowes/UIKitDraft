import {inputs} from "./helpers/styles";

import createElement from "../utils/createElement";
import variables from "./helpers/variables";

const Input = styled('input')`
	${inputs};
	display: inline-block;
	box-sizing: border-box;
	width: calc(100% - ${variables.spaceSize2});
`

export default Input