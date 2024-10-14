import { MealItem } from "..";
import classes from "./meals.module.css";

export const MealsItems = ({meals}) => {
    return <div className={classes.wrapper_meals}>
        {meals.map(meal => <MealItem key={meal.slug} {...meal} />)}
    </div>
}