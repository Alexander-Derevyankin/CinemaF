import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Nav from "./Nav";
import Cinema from "../Cinema/Cinema";
import Film from "../Film/Film";


class Main extends React.Component {


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
                    <Nav
                        notifyPathname={this.notifyPathname}
                        pathname={this.state.pathname}
                    />
                    <Switch>
                        {/*<Route path="/edit/:id"*/}
                        {/*       exact*/}
                        {/*       car={this.state.car}*/}
                        {/*       component={(props) => <CreateCar {...props}/>}*/}
                        {/*/>*/}

                        {/*<Route path="/create"*/}
                        {/*       exact*/}
                        {/*       component={() => <CreateCar/>}*/}
                        {/*/>*/}

                        <Route path="/"
                               exact
                               component={() => <Cinema/>}
                        />

                        <Route path="/film"
                               exact
                               component={() => <Film/>}
                        />

                        {/*<Route path="/contracts"*/}
                        {/*       exact*/}
                        {/*       component={() => <Contracts/>}*/}
                        {/*/>*/}
                        {/*<Route path="/report"*/}
                        {/*       exact*/}
                        {/*       component={() => <Report/>}*/}
                        {/*/>*/}



                        {/*<Route path="/client/edit/:id"*/}
                        {/*       exact*/}
                        {/*       car={this.state.car}*/}
                        {/*       component={(props) => <CreateClient {...props}/>}*/}
                        {/*/>*/}

                        {/*<Route path="/clients/create"*/}
                        {/*       exact*/}
                        {/*       component={() => <CreateClient/>}*/}
                        {/*/>*/}

                        {/*<Route path="/contract/create"*/}
                        {/*       exact*/}
                        {/*       component={() => <CreateContract/>}*/}
                        {/*/>*/}

                        {/*<Route path="/contract/edit/:id"*/}
                        {/*       exact*/}
                        {/*       contract={this.state.contract}*/}
                        {/*       component={(props) => <CreateContract {...props}/>}*/}
                        {/*/>*/}

                        {/*<Route path="/stat"*/}
                        {/*       exact*/}
                        {/*       component={() => <Statistic/>}*/}
                        {/*/>*/}

                        {/*<Route path="/author"*/}
                        {/*       exact*/}
                        {/*       component={() => <Author/>}*/}
                        {/*/>*/}

                    </Switch>
                </BrowserRouter>
        );
    }
};

export default Main;