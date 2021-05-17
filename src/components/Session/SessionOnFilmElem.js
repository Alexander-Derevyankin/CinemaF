import React from 'react';
import "./SessionOnFilmElem.css"

const SessionOnFilmElem = ({date, sessions}) => {
    return (
        <div className="session-elem">
            <div className="date">
                Дата: {date}
            </div>
            {sessions.map(s => {
                return (
                    <div className="session">
                        <div className="row">
                            <div>Адрес:</div>
                            <div className="address">{s.cinema.address}</div>
                        </div>
                        <div className="row">
                            <div>Время:</div>
                            <div className="time">{s.time}</div>
                        </div>
                        <div className="row">
                            <div>Зал:</div>
                            <div className="hall">{s.hall.type} ({s.hall.count} места)</div>
                        </div>
                        <div className="row">
                            <div>Цена:</div>
                            <div className="cost">{s.cost} руб</div>
                        </div>
                        {/*<button>Изменить</button>*/}
                    </div>
                )
            })}
        </div>
    );
};

export default SessionOnFilmElem;