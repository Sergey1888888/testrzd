import React from 'react';
import styled from 'styled-components';
import {Button, SemanticCOLORS} from "semantic-ui-react";

const StyledButton = styled(Button)<CustomButtonProps>`
  margin-top: ${(props) => props.$indent ? '2rem !important' : ''};
  width: ${({width}) => width ? width : ''};
`

interface CustomButtonProps {
    onClick?: (() => void) | ((id: number) => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    indent?: boolean;
    type?: string;
    disabled?: boolean;
    color?: SemanticCOLORS;
    width?: string;
    form?: string;
    loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({children, indent, ...props}) => {
    return (
        <StyledButton basic $indent={indent} {...props}>{children}</StyledButton>
    );
};

export default CustomButton;