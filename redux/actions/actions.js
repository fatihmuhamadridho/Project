import { ERROR, GET_USERS } from '../reducers/types'
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