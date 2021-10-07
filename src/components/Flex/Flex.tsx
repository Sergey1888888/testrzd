import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : 'row'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'flex-start'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'flex-start'};
  width: ${({width}) => width ? width : 'auto'};
  height: ${({height}) => height ? height : 'auto'};
  position: ${({position}) => position ? position : 'auto'};
  top: ${({top}) => top ? top : ''};
  gap: ${({gap}) => gap ? gap : ''};
  
  @media screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

interface FlexProps {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    height?: string;
    position?: string;
    top?: string;
    gap?: string;
}

const Flex: React.FC<FlexProps> = ({children, ...props}) => {
    return (
        <StyledFlex {...props}>
            {children}
        </StyledFlex>
    );
};

export default Flex;