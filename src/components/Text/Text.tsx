import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div<TextProps>`
  font-size: ${({fontSize}) => fontSize ? fontSize : ''};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : ''};
  color: ${({color}) => color ? color : ''};
  margin: ${({margin}) => margin ? margin : ''};
  display: ${({display}) => display ? display : ''};
`

interface TextProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    margin?: string;
    display?: string;
}

const Text: React.FC<TextProps> = ({children, ...props}) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    );
};

export default Text;