import React from 'react';
import styled from 'styled-components';
import {Label, SemanticCOLORS} from "semantic-ui-react";

const StyledLabel = styled(Label)`
  background-color: transparent !important;
  padding: .5833em .833em .5833em 0 !important;
`

interface CustomLabelProps {
    color?: SemanticCOLORS;
}

const CustomLabel: React.FC<CustomLabelProps> = ({children, ...props}) => {
    return (
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
};

export default CustomLabel;