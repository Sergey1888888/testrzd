import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {passengerReducer} from "./passengersReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    passengers: passengerReducer
})

export type RootState = ReturnType<typeof rootReducer>;