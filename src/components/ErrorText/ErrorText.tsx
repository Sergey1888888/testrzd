import React from 'react';
import styled from 'styled-components';

const StyledErrorText = styled.span`
  color: red;
`

interface ErrorTextProps {
    error: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({error}) => {
    return (
        <StyledErrorText>
            {error}
        </StyledErrorText>
    );
};

export default ErrorText;