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
} from "../services/types"


const defaultState = {
    cinemas: [],
    error: null,
    isLoading: true
}


export const cinemaReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CINEMA_SUCCESS:
            return {...state, cinemas: action.payload}
        case FETCH_CINEMA_LOADING:
            return {...state, isLoading: action.payload}
        case FETCH_CINEMA_ERROR:
            return {...state, error: action.payload}
        case ADD_CINEMA_SUCCESS:
            return {...state, cinemas: [...state.cinemas, action.payload]}
        case ADD_CINEMA_ERROR:
            return  {...state, error: action.payload}
        case EDIT_CINEMA_SUCCESS:
            const updateCars = state.cinemas.filter(cinemas => cinemas.id !== action.payload.id)
            return {...state, cinemas: [...updateCars, action.payload]}
        case DELETE_CINEMA_SUCCESS:
            const filterCars = state.cinemas.filter(cinemas => cinemas.id !== action.payload)
            return {...state, cinemas: [...filterCars] }
        case DELETE_CINEMA_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}