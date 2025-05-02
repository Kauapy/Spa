import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.css';

export default function Menu() {
    return (
        <header>
            <nav className={style.navegacao}>
                <NavLink 
                    className={({ isActive }) => `
                        ${style.link}
                        ${isActive ? style.linkDestacado : ""}
                    `}
                    to="/"
                >
                    Início
                </NavLink>
                <NavLink 
                    className={({ isActive }) => `
                        ${style.link}
                        ${isActive ? style.linkDestacado : ""}
                    `}
                    to="/sobremim"
                >
                    Sobre Mim
                </NavLink>
            </nav>
        </header>
    );
}