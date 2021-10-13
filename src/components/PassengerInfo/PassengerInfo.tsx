import React from 'react';
import {Form, Grid} from "semantic-ui-react";
import {Field} from 'redux-form'
import Header from "../Header/Header"
import CustomLabel from "../CustomLabel/CustomLabel"
import Asterisk from "../Icons/Asterisk/Asterisk";
import {dateBeforeToday, isDate, isEmail, isOneWord, isPhoneNumber, required} from "../../validations/validations";
import {ICheckboxFieldProp, IDateInputFieldProp, IInputFieldProp, ISelectFieldProp} from "../../types/field";
import 'moment/locale/ru';
import ErrorText from "../ErrorText/ErrorText";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomDateInput from "../CustomDateInput/CustomDateInput";
import CutomInput from "../CustomInput/CutomInput";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
import Text from "../Text/Text";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Flex from "../Flex/Flex";

const StyledPassengerInfo = styled.div`
  &:not(:first-child) {
    margin-top: 100px;
  }
  & .infoGrid {
    margin-bottom: 2rem !important;
  }
`

const renderInput = (field: IInputFieldProp) => (
    <>
        <CutomInput
            label={field.label}
            name={field.input.name}
            onChange={(e, {value}) => field.input.onChange(value)}
            onBlur={() => field.input.onBlur()}
            placeholder={field.placeholder}
            value={field.input.value}
            error={field.meta.touched && Boolean(field.meta.error)}
            type={field.type}
        />
        {field.meta.touched && (field.meta.error && <ErrorText error={field.meta.error}/>)}
    </>
);

const renderSelect = (field: ISelectFieldProp) => (
    <>
        <CustomSelect
            label={field.label}
            name={field.input.name}
            onChange={(e, {value}) => field.input.onChange(value)}
            onBlur={() => field.input.onBlur()}
            options={field.options}
            placeholder={field.placeholder}
            value={field.input.value}
            selectOnBlur={false}
            error={field.meta.touched && Boolean(field.meta.error)}
        />
        {field.meta.touched && (field.meta.error && <ErrorText error={field.meta.error}/>)}
    </>
);

const renderDateInput = (field: IDateInputFieldProp) => (
    <>
        <CustomDateInput
            label={field.label}
            name={field.input.name}
            onChange={(e, {value}) => field.input.onChange(value)}
            onBlur={() => field.input.onBlur()}
            placeholder={field.placeholder}
            value={field.input.value}
            localization='ru'
            error={field.meta.touched && Boolean(field.meta.error)}
        />
        {field.meta.touched && (field.meta.error && <ErrorText error={field.meta.error}/>)}
    </>
);

const renderCheckbox = (field: ICheckboxFieldProp) => (
    <>
        <Form.Checkbox
            checked={field.input.checked}
            name={field.input.name}
            label={field.label}
            onChange={(e: React.FormEvent<HTMLInputElement>, {checked}: any) => field.input.onChange(checked)}
        />
        {field.meta.touched && (field.meta.error && <ErrorText error={field.meta.error}/>)}
    </>
);

const PassengerInfo = ({fields}: any) => {
    const formValues = useTypedSelector((state) => state.form.passengers?.values ? state.form.passengers?.values.passengers : false);
    return (
        <>
            {fields.map((passenger: any, index: number) => (
                <StyledPassengerInfo key={index}>
                    <Flex justifyContent='space-between'>
                        <Header margin='0 0 2.3rem'>Пассажир №{index + 1}</Header>
                        <CustomButton color='red' onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            fields.remove(index);
                        }}>Удалить пассажира</CustomButton>
                    </Flex>
                    <Grid columns={3} stackable doubling className='infoGrid'>
                        <Grid.Row>
                            <Grid.Column verticalAlign='middle'>
                                <Field
                                    component={renderCheckbox}
                                    label='Оформление билета по ФСС'
                                    name={`${passenger}.fss`}
                                    type="checkbox"
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Column>
                            <Field
                                component={renderInput}
                                label={<CustomLabel>Фамилия <Asterisk/></CustomLabel>}
                                name={`${passenger}.surname`}
                                placeholder="Фамилия"
                                validate={[required, isOneWord]}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Field
                                component={renderInput}
                                label={<CustomLabel>Имя <Asterisk/></CustomLabel>}
                                name={`${passenger}.name`}
                                placeholder="Имя"
                                validate={[required, isOneWord]}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Field
                                component={renderInput}
                                label={<CustomLabel>Отчество (обязательно, при наличии) <Asterisk/></CustomLabel>}
                                name={`${passenger}.patronymic`}
                                placeholder="Отчество"
                                validate={isOneWord}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Field
                                component={renderSelect}
                                label={<CustomLabel>Пол <Asterisk/></CustomLabel>}
                                name={`${passenger}.gender`}
                                type="text"
                                options={[
                                    {key: "m", text: "Мужчина", value: "Мужчина"},
                                    {key: "f", text: "Женщина", value: "Женщина"}
                                ]}
                                placeholder="Пол"
                                validate={required}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Field
                                component={renderDateInput}
                                label={<CustomLabel>Дата рождения <Asterisk/></CustomLabel>}
                                name={`${passenger}.birth`}
                                placeholder="Дата рождения"
                                validate={[required, dateBeforeToday, isDate]}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Field
                                component={renderSelect}
                                label={<CustomLabel>Гражданство <Asterisk/></CustomLabel>}
                                name={`${passenger}.nationality`}
                                options={[
                                    {key: "ru", text: "Россия", value: "Россия"},
                                    {key: "us", text: "США", value: "США"},
                                    {key: "other", text: "Другое", value: "Другое"}
                                ]}
                                placeholder="Гражданство"
                                validate={required}
                            />
                        </Grid.Column>
                    </Grid>
                    <Field
                        component={renderCheckbox}
                        label='Согласен на получение оповещений в случаях чрезвычайных ситуаций на железнодорожном транспорте'
                        name={`${passenger}.isAgreed`}
                        type="checkbox"
                    />
                    {formValues[index]?.isAgreed && <>
                        <Text color='#666666'>
                            Если вы хотите получать оповещения об изменении движения вашего поезда в случае чрезвычайной
                            ситуации, укажите, пожалуйста, e-mail и/или телефон пассажира.
                        </Text>
                        <Text color='#666666' margin='0 0 1rem'>
                            Если не хотите получать оповещения - снимите галочку согласия на оповещения.
                        </Text>
                        <Grid columns={3} stackable doubling>
                            <Grid.Column>
                                <Field
                                    component={renderInput}
                                    label={<CustomLabel>Телефон пассажира</CustomLabel>}
                                    name={`${passenger}.phoneNumber`}
                                    placeholder=""
                                    validate={formValues[index]?.email ? formValues[index]?.phoneNumber ? [isPhoneNumber] : undefined : [required, isPhoneNumber]}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Field
                                    component={renderInput}
                                    label={<CustomLabel>E-mail пассажира</CustomLabel>}
                                    name={`${passenger}.email`}
                                    placeholder=""
                                    validate={formValues[index]?.phoneNumber ? formValues[index]?.email ? [isEmail] : undefined : [required, isEmail]}
                                />
                            </Grid.Column>
                        </Grid>
                    </>
                    }
                </StyledPassengerInfo>))
            }
            <CustomButton indent onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                fields.push({});
            }}>Добавить пассажира</CustomButton>
        </>
    );
};

export default PassengerInfo;