import React from 'react';
import {connect} from "react-redux";

import {fetchFilm, deleteFilm} from "../../services/FilmServices";
import FilmElem from "./FilmElem";

class FilmPopular extends React.Component {
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
                <div>
                    {this.props.films.map(film => {
                        if (film.rate > 7) {
                            return (
                                <FilmElem
                                    film={film}
                                    del={this.props.onDelete}

                                />
                            )
                        }
                    })}

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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmPopular);