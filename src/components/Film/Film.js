import React from 'react';
import {connect} from "react-redux";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import "./Film.css"
import {history} from "../../index";
import {fetchFilm, deleteFilm} from "../../services/FilmServices";
import FilmElem from "./FilmElem";

class Film extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.onFetch()
    }


    render() {

        if (this.props.isLoading) {
            return (
                <div>
                    Загрузка данных
                </div>
            )

        } else
            return (
                <div className="main">
                    <div className="search">
                        <InputLabel htmlFor="searchNumber"/>
                        <Input
                            className="search-in"
                            placeholder={"Поиск по названию"}
                            id="searchNumber"
                            onChange={(e) => this.props.searchByName(e.target.value)}
                            startAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            }/>
                    </div>
                    <button className="btn" onClick={() => history.push('/film/create')}>Добавить</button>
                    <div>
                        {this.props.films.map(film => {
                            return (
                                <FilmElem
                                    film={film}
                                    del={this.props.onDelete}

                                />
                            )
                        })}
                    </div>
                </div>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        films: state.filmData.films || [],
        error: state.filmData.error,
        isLoading: state.filmData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchFilm())
        },
        onDelete: (id) => {
            dispatch(deleteFilm(id))
        },

        searchByName : (data) => {
            dispatch({type: "ПОИСК_ПО_ИМЕНИ", payload: data})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);