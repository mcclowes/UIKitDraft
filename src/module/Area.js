import styled from "react-emotion";
import React from "react";
import variables from "./helpers/variables";

const AreaInner = styled("div")`
	box-sizing: border-box;
	border-color: ${variables.linesColor};
	background-color: ${variables.secondaryBackgroundColor};
	border-style: ${variables.linesStyle};
	border-width: ${variables.linesSize};
	border-radius: ${variables.radius};
	display: flex;
	flex-wrap: wrap;
`;

const AreaWrapper = styled("div")`
	padding: 0.5rem;
`;

const Row = styled("div")`
	display: flex;
	flex-basis: 100%;
	flex-grow: 1;
	flex-direction: row;
	
	// at mobile size
	//flex-wrap: wrap;

	&:not(:last-child) {
		border-color: ${variables.linesColor};
  		border-style: ${variables.linesStyle};
  		border-width: 0 0 ${variables.linesSize} 0;
	}
`;

const Column = styled("div")`
	padding: 0.5rem;
	display: flex;
	flex-grow: 1;
	flex-direction: column;

	&:not(:last-child) {
		border-color: ${variables.linesColor};
  		border-style: ${variables.linesStyle};
  		/* border-width: 0 ${variables.linesSize} ${variables.linesSize} 0;*/
  		border-width: 0 ${variables.linesSize} 0 0;
	}
`;

const Area = props => {
	const { className, children, ...rest } = props;

	return (
		<AreaWrapper className={className}>
			<AreaInner {...rest}>
				{children}
			</AreaInner>
		</AreaWrapper>
	);
};

Area.Row = Row;
Area.Column = Column;

export default Area;
