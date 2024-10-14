import Link from "next/link";
import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import { MealsItems } from "@/components";
import { Suspense } from "react"

async function Meal() {
    const meals = await getMeals();
    return <MealsItems meals={meals} />
}

export default function Meals() {

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
          <Suspense fallback={<p>loading...</p>}>
            <Meal />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
