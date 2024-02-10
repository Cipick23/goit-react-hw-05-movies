// Header.js
import React from 'react';
import styles from './Header.modules.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    {
      id: '1',
      name: 'Home',
      //   icon: <HiBookCap />,
      path: '/',
    },
    {
      id: '2',
      name: 'Movies',
      //   icon: <HiAcademicCap />,
      path: '/Movies',
    },
  ];

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBrandBox}></div>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className={styles.list}>
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.navLinkActive : ''].join('')
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
