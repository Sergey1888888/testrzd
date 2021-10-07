import React, {useEffect, useState} from 'react';
import {FormSection, InjectedFormProps, reduxForm} from "redux-form";
import {Form} from "semantic-ui-react";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import {IPassenger} from "../../types/passenger";
import CustomButton from "../CustomButton/CustomButton";
import TripCard from "../TripCard/TripCard";
import Flex from "../Flex/Flex";
import {uploadPassengers} from "../../store/action-creators/passengers";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PassengerForm: React.FC<InjectedFormProps<IPassenger>> = ({handleSubmit, submitting, invalid}) => {
    const [count, setCount] = useState<number>(1);
    const [passengers, setPassengers] = useState<any[]>([]);
    const [formValues, setFormValues] = useState<IPassenger | null>(null);
    const isLoading = useTypedSelector((state) => state.passengers.loading);
    const dispatch = useDispatch();

    const removePassenger = (id: number) => {
        setPassengers([...passengers.slice(id - 2, id), ...passengers.slice(id)])
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

    useEffect(() => {
        let passengersArr = [];
        for (let i = 1; i <= count; i++) {
            passengersArr.push(<FormSection key={i} name={`passenger${i}` as string}>
                <PassengerInfo passengerNumber={i} removePassenger={removePassenger} submitting={submitting}/>
            </FormSection>)
        }
        setPassengers(passengersArr);
    }, [count])
    
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
                                  disabled={submitting || invalid || count === 0}
                                  loading={isLoading}>Заказать</CustomButton>
                </Flex>
            </Flex>
        </>
    );
};

export default reduxForm<IPassenger>({
    form: "passengers"
})(PassengerForm);