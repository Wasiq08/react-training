import { EMPLOYEE_FETCH_SUCESS, EMPLOYEE_SAVE } from '../actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMPLOYEE_FETCH_SUCESS:
        return action.payload;
        default:
        return state;
    }


}