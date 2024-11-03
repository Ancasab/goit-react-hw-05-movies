import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.layoutHeader}>
        <nav>
          <NavLink 
            className={({ isActive }) => `${css.layoutLink} ${isActive ? css.active : ''}`} 
            to="/goit-react-hw-05-movies/"
            end
          >
            Home
          </NavLink>
          <NavLink 
            className={({ isActive }) => `${css.layoutLink} ${isActive ? css.active : ''}`} 
            to="/goit-react-hw-05-movies/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};







