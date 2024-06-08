import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={getNavLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
}

// див github і вебінар 9-10
