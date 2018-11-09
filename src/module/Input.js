import {inputs} from "./helpers/styles";

import React from 'react'
import variables from "./helpers/variables";
import styled from 'react-emotion'


const InputWrapper = styled('div')`
  padding: 0.5rem;
  display: inline-block;
  width: 100%;

  &:not(:last-child) {
    padding-bottom: 1rem;
  }
`

const InputInner = styled('input')`
	${inputs};

	box-sizing: border-box;
	padding: 0.5rem;
  display: inline-block;
  width: 100%;
`

const Input = (props) => {
  const {children, className, ...rest} = props

  return (
    <InputWrapper className={className}>
      <InputInner {...rest}>
        {children}
      </InputInner>

    </InputWrapper>
  );
};

export default Input