const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51H6oX6EZqH2tUnXpP6HKZnjAKTJU6Ii6LlZ0xyD3NPj6UiMKPXOr6Z52mA5fUiqcX7aRLrfreXWnsmQt18Lrayq900HMQk25Co"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const { total } = req.query;

  console.log("Payment Request Received :>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  console.log(paymentIntent);
  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
