import React from 'react';
import styled from 'styled-components';
import {DateInput} from "semantic-ui-calendar-react";
import {IDateInputField} from "../../types/field";

const StyledCustomDateInput = styled(DateInput)<IDateInputField>`
  margin-bottom: 0 !important;
`

const CustomDateInput: React.FC<IDateInputField> = (props) => {
    return (
        <StyledCustomDateInput {...props}/>
    );
};

export default CustomDateInput;