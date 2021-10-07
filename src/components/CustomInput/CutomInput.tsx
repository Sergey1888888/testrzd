import React from 'react';
import styled from 'styled-components';
import {Form} from "semantic-ui-react";
import {IInputField} from "../../types/field";

const StyledCustomInput = styled(Form.Input)<IInputField>`
  margin-bottom: 0 !important;
`

const CutomInput: React.FC<IInputField> = (props) => {
    return (
        <StyledCustomInput {...props}/>
    );
};

export default CutomInput;