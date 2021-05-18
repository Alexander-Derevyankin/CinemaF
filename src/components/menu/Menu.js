import React from 'react';
import {history} from "../../index";


const Menu = () => {
    return (
        <div className="menu">
            <div className="App__head__menu" onClick={() => {history.push('/')}}>Анонсы</div>
            <div className="App__head__menu" onClick={() => {history.push('/film')}}>Фильмы</div>
            <div className="App__head__menu" onClick={() => {history.push('/contracts')}}>Кинотеатры</div>
            <div className="App__head__menu" onClick={() => {history.push('/report')}}>Расписание</div>
            {/*<div className="App__head__menu" onClick={() => {history.push('/stat')}}>Статистика</div>*/}
            <div className="App__head__menu" onClick={() => {history.push('/author')}}>Об авторе</div>
        </div>
    );
};

export default Menu;