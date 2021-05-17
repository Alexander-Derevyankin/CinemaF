import React from 'react';
import {connect} from "react-redux";

import {fetchCinema} from "../../services/CinemaServices";
import {history} from "../../index";
import CinemaElem from "./CinemaElem";
import "./CinemaElem.css"

class Cinema extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.onFetch()
    }

    handleGetSession = (cinema) => {
        history.push({
            pathname: `/cinema/${cinema.id}/session/`,
            state: {
                cinema: cinema,
            }
        })
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
                <div className="cinema">
                    <div className="cinema-name">
                        Адреса кинотеатров
                    </div>
                    {this.props.cinemas.map(cinema => {
                        return (
                            <CinemaElem
                                cinema={cinema}
                                ses={this.handleGetSession}
                            />
                            // <p key={cinema.id}>
                            //     {cinema.address}
                            //     <button className="btn" onClick={this.handleGetSession}>Расписание</button>
                            // </p>
                        )
                    })}
                </div>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        cinemas: state.cinemaData.cinemas || [],
        error: state.cinemaData.error,
        isLoading: state.cinemaData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchCinema())
        },
        // onDelete: (id) => {
        //     dispatch(deleteCars(id))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinema);