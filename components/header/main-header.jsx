import Link from "next/link";
import { Logo } from "..";
import classes from "./header.module.css";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.navbar}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
