import { Logo, NavLink } from "..";
import classes from "./header.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.navbar}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
