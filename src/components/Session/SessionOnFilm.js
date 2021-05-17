import React from 'react';
import axios from "axios";
import SessionOnFilmElem from "./SessionOnFilmElem";
import "./SessionOnFilmElem.css"
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {history} from "../../index";

class SessionOnFilm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            film: null,
            filmsData: [],
            isLoading: true,
            error: false,
        }
    }

    async componentDidMount() {
        const props = this.props
        if (props.location && props.location.state) {
            const film = props.location.state.film
            this.setState({
                film: film,
            })
            const FILM_REST_API_URL = `http://localhost:8080/api/session/film/${film.id}`
            await axios.get(FILM_REST_API_URL)
                .then(response => {
                    const fDataArray = [];
                    Object.entries(response.data).forEach(([key, value]) => {
                        fDataArray.push({sessions: value, date: key})
                    })
                    this.setState({
                        filmsData: fDataArray,
                        isLoading: false,
                    })
                })
                .catch(error => {
                    this.setState({
                        error: error,
                    })
                })
        }

    }


    handleEdit(film) {
        history.push({
            pathname: `/ses/create/${film.id}`,
            state: {
                film: film,
            }
        })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    Загрузка данных
                </div>
            )

        } else if (this.state.filmsData.length === 0) {
            return (
                <div className="sessions">
                    <div className="name">
                        {this.state.film.name}
                    </div>
                    <div className="notFilm">
                        Сеансов нету
                    </div>
                    {/*<button onClick={() => this.handleEdit(this.state.film)}>Добавить сеанс</button>*/}
                </div>
            )
        } else
            return (
                <div className="sessions">
                    {/*<div className="search">*/}
                    {/*    <InputLabel htmlFor="searchNumber"/>*/}
                    {/*    <Input*/}
                    {/*        className="search-in"*/}
                    {/*        placeholder={"Минимальная цена билета"}*/}
                    {/*        id="searchNumber"*/}
                    {/*        onChange={(e) => this.props.searchByMin(e.target.value)}*/}
                    {/*        startAdornment={*/}
                    {/*            <InputAdornment position="end">*/}
                    {/*                <SearchIcon/>*/}
                    {/*            </InputAdornment>*/}
                    {/*        }/>*/}
                    {/*</div>*/}
                    <div className="name">
                        {this.state.film.name}
                    </div>
                    {this.state.filmsData.map((k) => {
                        return (
                            <SessionOnFilmElem
                                date={k.date}
                                sessions={k.sessions}
                            />
                        )
                    })}
                </div>
            );
    }

};


export default (SessionOnFilm);