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
} from "../services/types"


const defaultState = {
    session: [],
    error: null,
    isLoading: true
}


export const sessionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SESSION_SUCCESS:
            return {...state, session: action.payload}
        case FETCH_SESSION_LOADING:
            return {...state, isLoading: action.payload}
        case FETCH_SESSION_ERROR:
            return {...state, error: action.payload}
        case ADD_SESSION_SUCCESS:
            return {...state, session: [...state.session, action.payload]}
        case ADD_SESSION_ERROR:
            return  {...state, error: action.payload}
        case EDIT_SESSION_SUCCESS:
            const updateSession = state.session.filter(session => session.id !== action.payload.id)
            return {...state, session: [...updateSession, action.payload]}
        case DELETE_SESSION_SUCCESS:
            const filterSession = state.session.filter(session => session.id !== action.payload)
            return {...state, session: [...filterSession] }
        case DELETE_SESSION_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}