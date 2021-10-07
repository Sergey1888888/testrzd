import {PassengerAction, PassengerActionTypes, PassengerState} from "../../types/passenger";

const initialState: PassengerState = {
    loading: false,
    error: null
}

export const passengerReducer = (state = initialState, action: PassengerAction): PassengerState => {
    switch (action.type) {
        case PassengerActionTypes.UPLOAD_PASSENGERS:
            return {...state, loading: true}
        case PassengerActionTypes.UPLOAD_PASSENGERS_SUCCESS:
            return {...state, loading: false}
        case PassengerActionTypes.UPLOAD_PASSENGERS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}