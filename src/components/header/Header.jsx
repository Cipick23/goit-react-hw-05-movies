// Header.js
import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    {
      id: '1',
      name: 'Home',
      path: '/',
    },
    {
      id: '2',
      name: 'Movies',
      path: '/movies',
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.sidebarBrandBox}></div>
      <ul className={styles.sidebarUl}>
        {menuItems.map(item => (
          <li key={item.id} className={styles.listLi}>
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
              }
            >
              {item.icon} {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
