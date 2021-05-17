import React from 'react';
import {Link} from "react-router-dom"

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.notifyPathname(window.location.pathname)
    }

    render() {
        return (
            <div className="NAV">
            </div>
        )
    }
}

export default Nav;