import Image from "next/image";
import Link from "next/link";
import classes from "./meal-item.module.css";

export const MealItem = ({ title, slug, image, summary, creator }) => {
  return (
    <div className={classes.meal__item_card}>
      <div className={classes.meal__item_header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.text_header}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </div>
      <div className={classes.meal_footer}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};
