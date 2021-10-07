import React from 'react';
import styled from 'styled-components';
import {Card, Label} from "semantic-ui-react";
import Text from "../Text/Text";

const StyledCard = styled(Card)`
  width: 100% !important;
`

const TripCard: React.FC = () => {
    return (
        <StyledCard>
            <Card.Content header={<Text fontSize='1.3rem' fontWeight='600'>Ваш выбор</Text>}/>
            <Card.Content description={<div>
                <Text fontSize='1.2rem' fontWeight='600' margin='0 0 1rem'>Поезда</Text>
                <Label color='red'>Туда</Label><Text display='inline-block' fontSize='0.8rem' margin='0 0 0 0.5rem'>В
                ПУТИ 12 Ч. 15 М.</Text>
            </div>}/>
            <Card.Content extra textAlign='right'>
                <Text color='#666666' display='inline' fontSize='1rem'>
                    от
                </Text>
                <Text margin='0 0 0 0.5rem' fontSize='1.2rem' color='red' display='inline'>
                    5 934 ₽
                </Text>
            </Card.Content>
        </StyledCard>
    );
};

export default TripCard;