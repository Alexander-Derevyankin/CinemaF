import {
    ADD_FILM_ERROR,
    ADD_FILM_LOADING,
    ADD_FILM_SUCCESS,
    DELETE_FILM_LOADING,
    DELETE_FILM_ERROR,
    DELETE_FILM_SUCCESS,
    EDIT_FILM_LOADING,
    EDIT_FILM_ERROR,
    EDIT_FILM_SUCCESS,
    FETCH_FILM_ERROR,
    FETCH_FILM_SUCCESS,
    FETCH_FILM_LOADING,
} from "./types"

import axios from "axios";
import {history} from "../index";

const FILM_REST_API_URL = "http://localhost:8080/api/film"


// FETCH DATA
export const fetchFilmSuccess = (data) => {
    return {
        type: FETCH_FILM_SUCCESS,
        payload: data,
    }
}

export const fetchFilmLoading = (data) => {
    return {
        type: FETCH_FILM_LOADING,
        payload: data,
    }
}

export const fetchFilmError = (data) => {
    return {
        type: FETCH_FILM_ERROR,
        payload: data,
    }
}

export const fetchFilm = () => {
    return (dispatch) => {
        return axios.get(FILM_REST_API_URL)
            .then(response => {
                const data = response.data;
                dispatch(fetchFilmSuccess(data))
                dispatch(fetchFilmLoading(false))
            }).catch(error => {
                dispatch(fetchFilmError(error))
                dispatch(fetchFilmLoading(false))
            })
    }
}

//DELETE-----------------------------------------------------------------
export const deleteFilmSuccess = (data) => {
    return {
        type: DELETE_FILM_SUCCESS,
        payload: data,
    }
}

export const deleteFilmError = (data) => {
    return {
        type: DELETE_FILM_ERROR,
        payload: data,
    }
}

export const deleteFilm = (id) => {
    return (dispatch) => {
        return axios.delete(`${FILM_REST_API_URL}/${id}`)
            .then(() => {
                dispatch(deleteFilmSuccess(id))
            })
            .catch(error => {
                dispatch(deleteFilmError(error))

            })
    }
}

//CREAT------------------------------------------------------------------
export const createFilmSuccess = (data) => {
    return {
        type: ADD_FILM_SUCCESS,
        payload: data,
    }
}

export const createFilmError = (data) => {
    // debugger
    return {
        type: ADD_FILM_ERROR,
        payload: data,
    }
}

export const createFilm = (film) => {
    if (film.id) {
        const data = {
            id: film.id,
            name: film.name,
            rate: film.rate,
            age:film.age,
            genre:film.genre,
            release:film.release,
            posterUrl:film.posterUrl,
            trailerUrl:film.trailerUrl,
            description:film.description,
        }
        return (dispatch => {
            dispatch(editFilm(data))
        })
    } else {
        const data = {
            id: film.id,
            name: film.name,
            rate: film.rate,
            age:film.age,
            genre:film.genre,
            release:film.release,
            posterUrl:film.posterUrl,
            trailerUrl:film.trailerUrl,
            description:film.description,
        }

        return (dispatch) => {
            return axios.post(FILM_REST_API_URL, data)
                .then(response => {

                    dispatch(createFilmSuccess(response.data))
                    history.push('/')

                }).catch(error => {
                    console.log(error)
                    const errorPayload = {}
                    errorPayload['message'] = error.response?.data
                    errorPayload['status'] = error.response?.status
                    dispatch(createFilmError(errorPayload))
                })
        }
    }

}

//EDIT-------------------------------------------------------------------
export const editFilmError = (data) => {
    return {
        type: EDIT_FILM_ERROR,
        payload: data,
    }
}

export const editFilmSuccess = (data) => {
    return {
        type: EDIT_FILM_SUCCESS,
        payload: data,
    }

}

export const editFilm = (data) => {
    debugger
    const id = data.id
    return (dispatch) => {
        return axios.put(`${FILM_REST_API_URL}`, data)
            .then(() => {
                return axios.get(`${FILM_REST_API_URL}`)
                    .then(response => {
                        dispatch(editFilmSuccess(response.data))
                        history.push('/')
                    }).catch(error => {
                        dispatch(editFilmError(error))
                    })
            }).catch(error => {
                dispatch(editFilmError(error))
            })
    }
}