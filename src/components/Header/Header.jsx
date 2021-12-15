import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        home
      </NavLink>
      <NavLink
        to="/game"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Game
      </NavLink>
      <NavLink
        to="/todo"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Todo
      </NavLink>
    </div>
  );
};

export default Header;
