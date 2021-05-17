import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import {history} from "./index";

import Nav from "./components/main/Nav";
import Cinema from "./components/Cinema/Cinema";
import Film from "./components/Film/Film";
import Session from "./components/Session/Session";
import Author from "./components/Author/Author";

//------import images
import pop from "./images/pop.png"
import author from "./images/profile.png"
import films from "./images/films.png"
import address from "./images/address.png"
import logo from "./images/logo.png"
import SessionOnFilm from "./components/Session/SessionOnFilm";
import SessionCinema from "./components/Session/SessionCinema";
import FilmCreate from "./components/Film/FilmCreate";
import FilmPopular from "./components/Film/FilmPopular";
import SesCreate from "./components/Session/SesCreate";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pathname: '',
        }
        this.notifyPathname = this.notifyPathname.bind(this)
    }

    notifyPathname(pathname) {
        this.setState({
            pathname: pathname,
        })
    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="menu">
                        <div className="App__head__menu">
                            <img src={logo} className="App-logo" alt="popular" width={75} height={75}/>
                            CINF
                        </div>

                        <div className="App__head__menu" onClick={() => {
                            history.push('/')
                        }}>
                            <img src={pop} className="App-logo" alt="popular" width={75} height={75}/>
                            Популярное
                        </div>

                        <div className="App__head__menu" onClick={() => {
                            history.push('/film')
                        }}>
                            <img src={films} className="App-logo" alt="popular" width={75} height={75}/>
                            Фильмы
                        </div>

                        <div className="App__head__menu" onClick={() => {
                            history.push('/cinema')
                        }}>
                            <img src={address} className="App-logo" alt="popular" width={75} height={75}/>
                            Кинотеатры
                        </div>

                        {/*<div className="App__head__menu" onClick={() => {*/}
                        {/*    history.push('/session')*/}
                        {/*}}>Расписание*/}
                        {/*</div>*/}

                        <div className="App__head__menu" onClick={() => {
                            history.push('/author')
                        }}>
                            <img src={author} className="App-logo" alt="popular" width={75} height={75}/>
                            Об авторе
                        </div>
                    </div>

                    <div className="content">
                        <BrowserRouter>
                            <Nav
                                notifyPathname={this.notifyPathname}
                                pathname={this.state.pathname}
                            />
                            <Switch>

                                <Route path="/"
                                       exact
                                       component={() => <FilmPopular/>}
                                />

                                <Route path="/session"
                                       exact
                                       component={() => <Session/>}
                                />

                                <Route path="/cinema"
                                       exact
                                       component={() => <Cinema/>}
                                />

                                <Route path="/film"
                                       exact
                                       component={() => <Film/>}
                                />

                                <Route path="/author"
                                       exact
                                       component={() => <Author/>}
                                />

                                {/*<Route path="/contracts"*/}
                                {/*       exact*/}
                                {/*       component={() => <Contracts/>}*/}
                                {/*/>*/}
                                {/*<Route path="/report"*/}
                                {/*       exact*/}
                                {/*       component={() => <Report/>}*/}
                                {/*/>*/}


                                <Route path="/film/:id/session"
                                       exact
                                       film={this.state.film}
                                       component={(props) => <SessionOnFilm {...props}/>}
                                />

                                <Route path="/film/edit/:id"
                                       exact
                                       film={this.state.film}
                                       component={(props) => <FilmCreate {...props}/>}
                                />
                                <Route path="/film/create"
                                       exact
                                       component={() => <FilmCreate/>}
                                />

                                <Route path="/ses/create"
                                       exact
                                       film={this.state.film}
                                       component={(props) => <SesCreate {...props}/>}
                                />

                                <Route path="/cinema/:id/session"
                                       exact
                                       cinema={this.state.cinema}
                                       component={(props) => <SessionCinema {...props}/>}
                                />


                            </Switch>
                        </BrowserRouter>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
