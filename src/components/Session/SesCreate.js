import React from 'react';
import {history} from "../../index";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {createFilm} from "../../services/FilmServices";

class SesCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            time: null,
            cost:null,
            cinema:null,
            hall:null,
            film:null,
        }

    }


    componentWillMount() {
        const props = this.props
        if (props.location && props.location.state) {
            const session = props.location.state.session

            this.setState({
                id: session.id,
                date: session.date,
                time: session.time,
                cost:session.cost,
                cinema:session.cinema,
                hall:session.hall,
                film:props.location.state.film,
            })
        }
    }

    handleReset(e) {
        e.preventDefault()
        history.push({pathname: "/"})
        this.setState({
            date: null,
            time: null,
            cost:null,
            cinema:null,
            hall:null,
            film:null,
        })
    }

    handleOnValueChange(e) {
        this.setState({
                [e.target.id]: e.target.value,
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        if (
            this.state.name == null ||
            this.state.rate == null ||
            this.state.age == null ||
            this.state.genre == null ||
            this.state.release == null ||
            this.state.posterUrl == null ||
            this.state.trailerUrl == null ||
            this.state.description == null
        )
            alert("Не все поля заполнены!!")
        else
            this.props.onAdd(this.state)
    }

    render() {
        return (
            <div className="content-create">
                <form className="content__create-form" onSubmit={this.handleSubmit.bind(this)}>
                    <Grid container spacing={2} justify={"center"}>
                        <Grid item xs={12} md={12} lg={12}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="date"
                                       value={this.state.date}
                                       type="date"
                                       variant="outlined" label="Дата"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="time"
                                       value={this.state.time}
                                       type="time"
                                       variant="outlined" label="Время"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="cost"
                                       value={this.state.cost}
                                       type="text"
                                       variant="outlined" label="Цена билета"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="cinema"
                                       value={this.state.cinema}
                                       type="text"
                                       variant="outlined" label="cinema"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="hall"
                                       value={this.state.hall}
                                       type="date"
                                       variant="outlined" label="hall"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />

                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="posterUrl"
                                       value={this.state.posterUrl}
                                       type="text"
                                       variant="outlined" label="Постер URL"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />

                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >Создать</Button>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                type="button"
                                fullWidth
                                onClick={(e) => this.handleReset(e)}
                            >Закрыть
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}
;


const mapStateToProps = (state) => {
    return {
        error: state.filmData.error,
        // cinema: state.filmData.error,
        // hall: state.filmData.error,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (ses) => {
            dispatch(createFilm(ses));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SesCreate);