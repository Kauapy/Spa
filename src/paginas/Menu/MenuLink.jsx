import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './MenuLink.css'; 

export default function MenuLink({children, to}) {
  const localizacao = useLocation();
  
  return (
    <header>
      <nav className={style.navegacao}>
        <NavLink
          className={({ isActive }) =>
          `${style.link}
          ${localizacao.pathname === to ? style.linkDestacado : ''}`}
          to={to}
        >
          {children}
        </NavLink>
      </nav>
    </header>
  );
}