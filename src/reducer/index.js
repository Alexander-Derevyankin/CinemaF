import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {cinemaReducer} from "./CinemaReducer";
import {filmReducer} from "./FilmReducer";
import {sessionReducer} from "./SessionReducer";

import {fetchCinema} from "../services/CinemaServices";
import {fetchFilm} from "../services/FilmServices";
import {fetchSession} from "../services/SessionServices";

const rootReducer = combineReducers({
    cinemaData: cinemaReducer,
    filmData: filmReducer,
    sessionData:sessionReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

store.dispatch(fetchCinema())
store.dispatch(fetchFilm())
store.dispatch(fetchSession())