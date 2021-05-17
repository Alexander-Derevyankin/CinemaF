import React from 'react';
import axios from "axios";
import SessionOnCinemaElem from "./SessionCinemaElem";
import "./SessionOnFilmElem.css"

class SessionOnFilm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cinema: null,
            cinemasData: [],
            isLoading: true,
            error: false,
        }
    }

    async componentDidMount() {
        const props = this.props
        if (props.location && props.location.state) {
            const cinema = props.location.state.cinema
            this.setState({
                cinema: cinema,
            })
            const CINEMA_REST_API_URL = `http://localhost:8080/api/session/cinema/${cinema.id}`
            await axios.get(CINEMA_REST_API_URL)
                .then(response => {
                    const fDataArray = [];
                    Object.entries(response.data).forEach(([key, value]) => {
                        fDataArray.push({sessions: value, date: key})
                    })
                    this.setState({
                        cinemasData: fDataArray,
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


    render() {

        if (this.state.isLoading) {
            return (
                <div>
                    Загрузка данных
                </div>
            )

        } else if (this.state.cinemasData.length === 0) {
            return (
                <div className="sessions">
                    <div className="name">
                        {this.state.cinema.name}
                    </div>
                    <div className="notFilm">
                        Сеансов нету
                    </div>
                </div>
            )
        } else
            return (
                <div className="sessions">
                    <div className="name">
                       {this.state.cinema.address}
                    </div>
                    {this.state.cinemasData.map((k) => {
                        return (
                            <SessionOnCinemaElem
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