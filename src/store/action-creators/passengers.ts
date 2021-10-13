import {IPassenger, PassengerAction, PassengerActionTypes} from "../../types/passenger";
import {Dispatch} from "redux";
import axios from "axios";

export const uploadPassengers = (passengers: IPassenger) => {
    return async (dispatch: Dispatch<PassengerAction>) => {
        try {
            dispatch({type: PassengerActionTypes.UPLOAD_PASSENGERS});
            await axios.post('https://webhook.site/0e6bb4d8-7878-47f8-ad89-f533f59bd6a2', JSON.stringify(passengers));
            dispatch({type: PassengerActionTypes.UPLOAD_PASSENGERS_SUCCESS});
        } catch (e) {
            dispatch({type: PassengerActionTypes.UPLOAD_PASSENGERS_ERROR, payload: 'Ошибка отправки!'});
        }
    }
}