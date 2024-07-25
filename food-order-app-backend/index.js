import express from "express";
import cors from "cors";

const app = express();
const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const portNumber = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/get-meals", (req, res) => {
  res.send(meals);
});

app.post("/order", (req, res) => {
  console.log(req.body);

  res.json({ msg: "RECEIVED" });
});

app.listen(portNumber, () => {
  console.log(`Hey, I am server! ruuning at port:${portNumber}`);
});
