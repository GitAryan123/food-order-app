import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [DUMMY_MEALS, setDUMMY_MEALS] = useState([
    // {
    //   id: "m1",
    //   name: "Sushi",
    //   description: "Finest fish and veggies",
    //   price: 22.99,
    // },
    // {
    //   id: "m2",
    //   name: "Schnitzel",
    //   description: "A german specialty!",
    //   price: 16.5,
    // },
    // {
    //   id: "m3",
    //   name: "Barbecue Burger",
    //   description: "American, raw, meaty",
    //   price: 12.99,
    // },
    // {
    //   id: "m4",
    //   name: "Green Bowl",
    //   description: "Healthy...and green...",
    //   price: 18.99,
    // },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/get-meals");
        const result = await res.json();
        console.log(result, res);
        setDUMMY_MEALS(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      id={meal.id}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {!(DUMMY_MEALS.length === 0) && <ul>{mealsList}</ul>}
        {DUMMY_MEALS.length === 0 && (
          <p>Someting went wrong while fetching data </p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
