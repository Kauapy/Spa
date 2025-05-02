import React from 'react'
import style from './Menu.module.css'
import MenuLink from './MenuLink'

export default function Menu(){
    return(
        <header>
            <nav className={style.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
            </nav>
        </header>
    );
}