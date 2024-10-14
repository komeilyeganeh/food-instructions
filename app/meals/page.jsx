import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { MealsItems } from "@/components";

export default async function Meals() {
  const meals = await getMeals();

  return (
    <main>
      <section className={classes.wrapper_meals}>
        <div className={classes.meals_header}>
          <h1>
            Delicious Meals Created{" "}
            <span className={classes.highlight}>by you</span>
          </h1>
          <p>Choose your favorite recipe and cook it yourself.</p>
          <p className={classes.cta}>
            <Link href="/meals/share">Share Your Favorite Recipe</Link>
          </p>
        </div>
        <div>
          <MealsItems meals={meals} />
        </div>
      </section>
    </main>
  );
}
