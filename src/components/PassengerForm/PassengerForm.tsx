import React, {useEffect, useState} from 'react';
import {FormSection, InjectedFormProps, reduxForm} from "redux-form";
import {Form} from "semantic-ui-react";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import {IFormValues, IPassenger} from "../../types/passenger";
import CustomButton from "../CustomButton/CustomButton";
import TripCard from "../TripCard/TripCard";
import Flex from "../Flex/Flex";
import {uploadPassengers} from "../../store/action-creators/passengers";
import {useDispatch} from "react-redux";

const PassengerForm: React.FC<InjectedFormProps<IPassenger>> = ({handleSubmit, submitting}) => {
    const [count, setCount] = useState<number>(1);
    const [formValues, setFormValues] = useState<IPassenger | null>(null);
    const dispatch = useDispatch();
    const passengers: any[] = [];

    const removePassenger = (id: number) => {
        passengers.splice(id - 1, 1);
        setCount(count - 1);
    }

    const addPassenger = () => {
        setCount(count + 1);
    }

    const onSubmit = (values: IPassenger) => {
        setFormValues(values);
    }

    useEffect(() => {
        if (formValues !== null) {
            dispatch(uploadPassengers(formValues));
        }
    }, [formValues])

    console.log(formValues)
    for (let i = 1; i <= count; i++) {
        passengers.push(<FormSection key={i} name={`passenger${i}` as string}>
            <PassengerInfo passengerNumber={i} removePassenger={removePassenger} submitting={submitting}/>
        </FormSection>)
    }

    return (
        <>
            <Flex justifyContent='space-between' gap='20px'>
                <Flex flexDirection='column' width='70%'>
                    <Form id='passengerForm' onSubmit={handleSubmit(onSubmit)}>
                        {passengers}
                    </Form>
                    <CustomButton indent onClick={addPassenger}>Добавить пассажира</CustomButton>
                </Flex>
                <Flex width='30%' flexDirection='column' position='sticky' top='20px'>
                    <TripCard/>
                    <CustomButton color='red' width='100%' form='passengerForm' type='submit'
                                  disabled={submitting || count === 0}>Заказать</CustomButton>
                </Flex>
            </Flex>
        </>
    );
};

export default reduxForm<IPassenger>({
    form: "passengers"
})(PassengerForm);