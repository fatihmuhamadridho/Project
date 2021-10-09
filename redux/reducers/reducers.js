import { USERS_LOGIN, ERROR, GET_USERS } from "./types";

const initialState = {
    users: [],
    user: {},
    loading: true
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case USERS_LOGIN:
            return {
                ...state,
                user: state.users,
            }
        case ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}