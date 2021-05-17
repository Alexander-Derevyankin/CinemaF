import {
    ADD_CINEMA_ERROR,
    ADD_CINEMA_LOADING,
    ADD_CINEMA_SUCCESS,
    DELETE_CINEMA_LOADING,
    DELETE_CINEMA_ERROR,
    DELETE_CINEMA_SUCCESS,
    EDIT_CINEMA_LOADING,
    EDIT_CINEMA_ERROR,
    EDIT_CINEMA_SUCCESS,
    FETCH_CINEMA_ERROR,
    FETCH_CINEMA_SUCCESS,
    FETCH_CINEMA_LOADING,
} from "./types"

import axios from "axios";

const CINEMA_REST_API_URL = "http://localhost:8080/api/cinema"


// FETCH DATA
export const fetchCinemaSuccess = (data) => {
    return {
        type: FETCH_CINEMA_SUCCESS,
        payload: data,
    }
}

export const fetchCinemaLoading = (data) => {
    return {
        type: FETCH_CINEMA_LOADING,
        payload: data,
    }
}

export const fetchCinemaError = (data) => {
    return {
        type: FETCH_CINEMA_ERROR,
        payload: data,
    }
}

export const fetchCinema = () => {
    return (dispatch) => {
        return axios.get(CINEMA_REST_API_URL)
            .then(response => {
                const data = response.data;
                dispatch(fetchCinemaSuccess(data))
                dispatch(fetchCinemaLoading(false))
            }).catch(error => {
                dispatch(fetchCinemaError(error))
                dispatch(fetchCinemaLoading(false))
            })
    }
}