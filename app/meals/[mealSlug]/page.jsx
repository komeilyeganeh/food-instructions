import { getMeal } from "@/lib/meals";
import Image from "next/image";
import classes from "./page.module.css";

export default function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);
  return (
    <>
      <div className={classes.meal__detail_header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.image} fill />
        </div>
        <div className={classes.header_text}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>SUMMARY</p>
        </div>
      </div>
      <div>
        <p className={classes.instructions} dangerouslySetInnerHTML={{
            __html: meal.instructions
        }}></p>
      </div>
    </>
  );
}
