import React from 'react';
import {connect} from "react-redux";

import {fetchSession} from "../../services/SessionServices";

class Session extends React.Component {
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
                    Данные загрузились
                    {this.props.sessions.map(session => {
                        return (
                            <p key={session.id}>
                                {session.date}
                            </p>
                        )
                    })}
                </div>
            );
    }
};

const mapStateToProps = (state) => {
    return {
        sessions: state.sessionData.session || [],
        error: state.sessionData.error,
        isLoading: state.sessionData.isLoading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchSession())
        },
        // onDelete: (id) => {
        //     dispatch(deleteCars(id))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Session);