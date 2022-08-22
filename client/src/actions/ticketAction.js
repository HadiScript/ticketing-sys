import axios from 'axios';
// import { API } from '../API/API';
import { TICKET_CREATE_FAIL, TICKET_CREATE_REQUEST, TICKET_CREATE_SUCCESS, TICKET_DELETE_FAIL, TICKET_DELETE_REQUEST, TICKET_DELETE_SUCCESS, TICKET_DETAILS_FAIL, TICKET_DETAILS_REQUEST, TICKET_DETAILS_SUCCESS, TICKET_LIST_FAIL, TICKET_LIST_REQUEST, TICKET_LIST_SUCCESS } from '../constants/ticket';
import { logout } from './authAction'
import { API } from '../API/Api'



export const createTicket = (forms) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TICKET_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`${API}/tc`, forms, config)
        // console.log(data);
        dispatch({
            type: TICKET_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TICKET_CREATE_FAIL,
            payload: message,
        })
    }
}



export const listTickets = (keyword = '', pageNumber = '') => async (
    dispatch, getState
) => {
    try {
        dispatch({ type: TICKET_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(
            `${API}/tc/all`, config
        )


        dispatch({
            type: TICKET_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TICKET_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const pendingTickets = (keyword = '', pageNumber = '') => async (
    dispatch, getState
) => {
    try {
        dispatch({ type: TICKET_LIST_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(
            `${API}/tc/all?keyword=${keyword}&pageNumber=${pageNumber}`, config
        )


        dispatch({
            type: TICKET_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TICKET_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}





export const ticketDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: TICKET_DETAILS_REQUEST })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`${API}/tc/${id}`, config)

        dispatch({
            type: TICKET_DETAILS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: TICKET_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}



export const deletingTicket = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TICKET_DELETE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.delete(`${API}/tc/${id}`, config)

        dispatch({
            type: TICKET_DELETE_SUCCESS,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: TICKET_DELETE_FAIL,
            payload: message,
        })
    }
}
