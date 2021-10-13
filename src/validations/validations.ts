import moment from "moment";

export const required = (value: any) => value ? undefined : 'Поле обязательное';
export const dateBeforeToday = (value: Date) => moment(value, "DDMMYYYY").fromNow().match(/назад/g) ? undefined : 'Некорректные данные';
// eslint-disable-next-line
export const isEmail = (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Введите корректный E-mail' : undefined;
// eslint-disable-next-line
export const isOneWord = (value: string) => value && !/^[а-яА-ЯёЁa-zA-Z\-]+$/i.test(value) ? 'Некорректные данные' : undefined;
// eslint-disable-next-line
export const isDate = (value: string) => value && !/^[\d]{2}[.\-][\d]{2}[.\-][\d]{4}$/i.test(value) ? 'Некорректная дата' : undefined;
// eslint-disable-next-line
export const isPhoneNumber = (value: string) => value && !/^(\+7|7|8)[\-]?\(?[489][0-9]{2}\)?[\-]?[0-9]{3}[\-]?[0-9]{2}[\-]?[0-9]{2}$/i.test(value)
    ? 'Введите корректный номер телефона' : undefined;
