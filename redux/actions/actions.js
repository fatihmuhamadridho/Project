import { ERROR, GET_USERS, USERS_LOGIN } from '../reducers/types'
import axios from "axios"


export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/users`);
        dispatch ({
            type: GET_USERS,
            payload: res.data
        })
        console.log(res);
    } catch(error) {
        dispatch ({
            type: ERROR,
            payload: error
        })
    }
}

export const usersLogin = () => async (dispatch) => {
    try {
        const res = await axios.post(`https://fakestoreapi.com/auth/login`).then((res) => {
            dispatch({
                type: USERS_LOGIN,
                paylaod: res.data
            })
        })
    } catch(error) {
        dispatch ({
            type: ERROR,
            payload: error
        })
    }
}
