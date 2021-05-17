import React, {useState} from 'react';
import logo from "../../images/logo.png";
import "./FilmElem.css"
import {history} from "../../index";


const FilmElem = ({film, del, edit}) => {

    const [filmInfo, setFilmInfo] = useState(false)

    let brus = "http://sib-fighter.com/wp-content/uploads/2019/07/%D0%9F%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%B5-%D0%91%D1%80%D1%8E%D1%81%D0%B0-%D0%9B%D0%B8.jpg"


    const handleGetSession = (film) => {
        history.push({
            pathname: `/film/${film.id}/session/`,
            state: {
                film: film,
            }
        })
    }

    const handleEdit = (film) => {
        history.push({
            pathname: `/film/edit/${film.id}`,
            state: {
                film: film,
            }
        })
    }

    if (filmInfo) {
        return (
            <div className="film-elem">
                <div className="image">
                    <img src={film.posterUrl} alt="popular"/>
                </div>
                <div className="film-info">
                    <div className="film-name">{film.name}</div>
                    <div className="row">
                        <div>Жанр:</div>
                        <div className="film-genre">{film.genre}</div>
                    </div>
                    <div className="row">
                        <div className="film-description">{film.description}</div>
                    </div>
                    <a className="btn" href={film.trailerUrl}>Трейлер</a>
                    <button className="btn" onClick={() => setFilmInfo(false)}>Вернуться</button>
                </div>
            </div>
        )
    } else
        return (
            <div className="film-elem">
                <div className="image">
                    <img src={film.posterUrl} alt="popular"/>
                </div>
                <div className="film-info">
                    <div className="film-name">{film.name}</div>

                    <div className="row">
                        <div>Жанр:</div>
                        <div className="film-genre">{film.genre}</div>
                    </div>
                    <div className="row">
                        <div>Ограничение:</div>
                        <div className="film-age">{film.age}+</div>
                    </div>
                    <div className="row">
                        <div>Рейтинг:</div>
                        <div className="film-rate">{film.rate}</div>
                    </div>
                    <div className="row">
                        <div>Дата выхода:</div>
                        <div className="film-release">{film.release}</div>
                    </div>

                    <button className="btn" onClick={() => handleGetSession(film)}>Расписание</button>
                    <button className="btn" onClick={() => setFilmInfo(true)}>О фильме</button>
                    <button className="btn-def" onClick={() => handleEdit(film)}>Изменить</button>
                    <button className="btn-dan" onClick={() => del(film.id)}>Удалить</button>
                </div>
            </div>
        );
};

export default FilmElem;