import createElement from "../utils/createElement";
import variables from "./helpers/variables";
import styled from 'react-emotion'
import React from 'react'

const ImgInner = styled('img')`
  height: auto;
  width: 100%;
`;

const ImgWrapper = styled('div')`
  padding: 0.5rem;
  display: block; 
  display: inline-block;
  width: 100%;
`;

const Img = (props) => {
  const {children, className, ...rest} = props

  return (
    <ImgWrapper className={className}>
      <ImgInner {...rest}>
        {children}
      </ImgInner>

    </ImgWrapper>
  );
};

export default Img