import React from 'react';
import styled from 'styled-components';
import {Form} from "semantic-ui-react";
import {ISelectField} from "../../types/field";

const StyledSelect = styled(Form.Select)<ISelectField>`
  margin-bottom: 0 !important;
  & > div {
    min-width: 2rem !important;
    max-width: 100% !important;
  }
`

const CustomSelect: React.FC<ISelectField> = (props) => {
    return (
        <StyledSelect {...props}/>
    );
};

export default CustomSelect;