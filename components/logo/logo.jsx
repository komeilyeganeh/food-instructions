import Image from "next/image";
import Link from "next/link";
import LogoPng from "@/assets/logo.png";
import classes from "./logo.module.css";

export const Logo = () => {
  return (
    <Link href="/" className={classes.logo}>
      <Image src={LogoPng} alt="logo image" priority />
      <span>Foodies</span>
    </Link>
  );
};
