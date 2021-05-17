import {
    ADD_SESSION_ERROR,
    ADD_SESSION_LOADING,
    ADD_SESSION_SUCCESS,
    DELETE_SESSION_LOADING,
    DELETE_SESSION_ERROR,
    DELETE_SESSION_SUCCESS,
    EDIT_SESSION_LOADING,
    EDIT_SESSION_ERROR,
    EDIT_SESSION_SUCCESS,
    FETCH_SESSION_ERROR,
    FETCH_SESSION_SUCCESS,
    FETCH_SESSION_LOADING,
} from "./types"

import axios from "axios";

const SESSION_REST_API_URL = "http://localhost:8080/api/session"


// FETCH DATA
export const fetchSessionSuccess = (data) => {
    return {
        type: FETCH_SESSION_SUCCESS,
        payload: data,
    }
}

export const fetchSessionLoading = (data) => {
    return {
        type: FETCH_SESSION_LOADING,
        payload: data,
    }
}

export const fetchSessionError = (data) => {
    return {
        type: FETCH_SESSION_ERROR,
        payload: data,
    }
}

export const fetchSession = () => {
    return (dispatch) => {
        return axios.get(SESSION_REST_API_URL)
            .then(response => {
                const data = response.data;
                dispatch(fetchSessionSuccess(data))
                dispatch(fetchSessionLoading(false))
            }).catch(error => {
                dispatch(fetchSessionError(error))
                dispatch(fetchSessionLoading(false))
            })
    }
}