import React, {useEffect, useState} from 'react';
import {FieldArray, InjectedFormProps, reduxForm} from "redux-form";
import {Form} from "semantic-ui-react";
import PassengerInfo from "../PassengerInfo/PassengerInfo";
import {IPassengerForm} from "../../types/passenger";
import CustomButton from "../CustomButton/CustomButton";
import TripCard from "../TripCard/TripCard";
import Flex from "../Flex/Flex";
import {uploadPassengers} from "../../store/action-creators/passengers";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const PassengerForm: React.FC<InjectedFormProps<IPassengerForm>> = ({handleSubmit, submitting, invalid}) => {
    const [formValues, setFormValues] = useState<IPassengerForm | null>(null);
    const isLoading = useTypedSelector((state) => state.passengers.loading);
    const dispatch = useDispatch();

    const onSubmit = (values: IPassengerForm) => {
        setFormValues(values);
    }

    useEffect(() => {
        if (formValues !== null) {
            dispatch(uploadPassengers(formValues));
        }
    }, [formValues])

    return (
        <>
            <Flex justifyContent='space-between' gap='20px'>
                <Flex flexDirection='column' width='70%'>
                    <Form id='passengerForm' onSubmit={handleSubmit(onSubmit)}>
                        <FieldArray name='passengers' component={PassengerInfo}/>
                    </Form>
                </Flex>
                <Flex width='30%' flexDirection='column' position='sticky' top='20px'>
                    <TripCard/>
                    <CustomButton color='red' width='100%' form='passengerForm' type='submit'
                                  disabled={submitting || invalid}
                                  loading={isLoading}>Заказать</CustomButton>
                </Flex>
            </Flex>
        </>
    );
};

export default reduxForm<IPassengerForm>({
    form: "passengers",
    initialValues: {passengers: [{}]}
})(PassengerForm);