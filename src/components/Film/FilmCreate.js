import React from 'react';
import {history} from "../../index";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {createFilm} from "../../services/FilmServices";
import "./CreateFilm.css"

class FilmCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            rate: null,
            age:null,
            genre:null,
            release:null,
            posterUrl:null,
            trailerUrl:null,
            description:null,
        }

    }


    componentWillMount() {
        const props = this.props
        if (props.location && props.location.state) {
            const film = props.location.state.film
            this.setState({
                id: film.id,
                name: film.name,
                rate: film.rate,
                age:film.age,
                genre:film.genre,
                release:film.release,
                posterUrl:film.posterUrl,
                trailerUrl:film.trailerUrl,
                description:film.description,
            })
        }
    }

    handleReset(e) {
        e.preventDefault()
        history.push({pathname: "/"})
        this.setState({
            name: null,
            rate: null,
            age:null,
            genre:null,
            release:null,
            posterUrl:null,
            trailerUrl:null,
            description:null,
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
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="name"
                                       value={this.state.name}
                                       type="text"
                                       variant="outlined" label="Название"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="rate"
                                       value={this.state.rate}
                                       type="number"
                                       variant="outlined" label="Рейтинг"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="age"
                                       value={this.state.age}
                                       type="number"
                                       variant="outlined" label="Возрастное ограниение"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="genre"
                                       value={this.state.genre}
                                       type="text"
                                       variant="outlined" label="Жанр"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="release"
                                       value={this.state.release}
                                       type="date"
                                       variant="outlined" label="Релиз"
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
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="trailerUrl"
                                       value={this.state.trailerUrl}
                                       type="text"
                                       variant="outlined" label="Трейлер URL"
                                       fullWidth
                                       InputLabelProps={{
                                           shrink: true,
                                       }}
                            />

                        </Grid>
                        <Grid item xs={10} md={10} lg={10}>
                            <TextField onChange={this.handleOnValueChange.bind(this)} id="description"
                                       value={this.state.description}
                                       type="text"
                                       variant="outlined" label="Описание"
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
        error: state.filmData.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (film) => {
            dispatch(createFilm(film));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmCreate);