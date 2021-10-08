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

const PassengerForm: React.FC<InjectedFormProps<IPassenger>> = ({handleSubmit, submitting, invalid, initialize}) => {
    const [count, setCount] = useState<number>(1);
    const [passengers, setPassengers] = useState<any[]>([]);
    const [formValues, setFormValues] = useState<IPassenger | null>(null);
    const formValuesBeforeSubmit = useTypedSelector((state) => state.form.passengers?.values);
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
        let initialValues: any = {};
        let isRefresh = false;
        for (let i = 1; i <= count; i++) {
            passengersArr.push(<FormSection key={i} name={`passenger${i}` as string}>
                <PassengerInfo passengerNumber={i} removePassenger={removePassenger} submitting={submitting}/>
            </FormSection>)
            if (formValuesBeforeSubmit && formValuesBeforeSubmit[`passenger${i}`]) {
                initialValues = {...formValuesBeforeSubmit};
                if (initialValues[`passenger${i}`].fss === undefined) {
                    initialValues[`passenger${i}`].fss = false;
                    isRefresh = true;
                }
                if (initialValues[`passenger${i}`].isAgreed === undefined) {
                    initialValues[`passenger${i}`].isAgreed = false;
                    isRefresh = true;
                }
            }
        }
        setPassengers(passengersArr);
        if (isRefresh) {
            initialize(initialValues)
        }
    }, [count, formValuesBeforeSubmit])

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