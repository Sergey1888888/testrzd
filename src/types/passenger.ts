export interface IPassenger {
    fss?: boolean;
    name: string;
    surname: string;
    patronymic?: string;
    gender: string;
    birth: Date;
    nationality: string;
    isAgreed: boolean;
    phoneNumber?: string;
    email?: string;
}

export interface PassengerState {
    loading: boolean;
    error: null | string;
}

export enum PassengerActionTypes {
    UPLOAD_PASSENGERS = "UPLOAD_PASSENGERS",
    UPLOAD_PASSENGERS_SUCCESS = "UPLOAD_PASSENGERS_SUCCESS",
    UPLOAD_PASSENGERS_ERROR = "UPLOAD_PASSENGERS_ERROR"
}

interface UploadPassengersAction {
    type: PassengerActionTypes.UPLOAD_PASSENGERS;
}

interface UploadPassengerSuccessAction {
    type: PassengerActionTypes.UPLOAD_PASSENGERS_SUCCESS;
}

interface UploadPassengerErrorAction {
    type: PassengerActionTypes.UPLOAD_PASSENGERS_ERROR;
    payload: string;
}

export type PassengerAction = UploadPassengersAction | UploadPassengerSuccessAction | UploadPassengerErrorAction;