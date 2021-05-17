import React from 'react';
import {history} from "../../index";
import "./CinemaElem.css"

const CinemaElem = ({cinema, ses}) => {


    return (
        <div className="cinema-elem">
            <div className="cinema-addess">{cinema.address}</div>
            <button className="btn" onClick={() => ses(cinema)}>Расписание</button>
        </div>
    );
};

export default CinemaElem;