import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MenuLink.module.css';

export default function MenuLink({children, to}) {
  const localizacao = useLocation();
  return (
    <header>
      <nav className={style.navegacao}>
        <NavLink
          className={({ isActive }) =>
          `${styles.link}
          ${localizacao.pathname === '/' ? styles.linkDestacado : ''}`}
          to={to}
        >{children}
        </NavLink>
      </nav>
    </header>
  );
}
