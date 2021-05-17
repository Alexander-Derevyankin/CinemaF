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
} from "../services/types"


const defaultState = {
    allFilms: [],
    films: [],
    error: null,
    isLoading: true
}


export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_FILM_SUCCESS:
            return {...state, films: action.payload, allFilms: action.payload}
        case FETCH_FILM_LOADING:
            return {...state, isLoading: action.payload}
        case FETCH_FILM_ERROR:
            return {...state, error: action.payload}
        case ADD_FILM_SUCCESS:
            return {...state, films: [...state.films, action.payload]}
        case ADD_FILM_ERROR:
            return  {...state, error: action.payload}
        case EDIT_FILM_SUCCESS:
            const updateFilm = state.films.filter(films => films.id !== action.payload.id)
            return {...state, films: [...updateFilm, action.payload]}
        case DELETE_FILM_SUCCESS:
            const filterFilm = state.films.filter(films => films.id !== action.payload)
            return {...state, films: [...filterFilm] }
        case DELETE_FILM_ERROR:
            return {...state, error: action.payload}
        case "ПОИСК_ПО_ИМЕНИ":
            state.films = state.allFilms
            const searchFilmName = []
            state.films.forEach(film => {
                if (film.name.indexOf(action.payload) >= 0) {
                    searchFilmName.push(film)
                }
            })
            return {...state, films: [...searchFilmName]}
        default:
            return state
    }
}