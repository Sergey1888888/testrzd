import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header<HeaderProps>`
  font-size: 2rem;
  font-weight: 400;
  color: #E32121;
  margin: ${({margin}) => margin};
`

interface HeaderProps {
    margin?: string;
}

const Header: React.FC<HeaderProps> = ({children, margin}) => {
    return <StyledHeader margin={margin}>{children}</StyledHeader>
};

export default Header;