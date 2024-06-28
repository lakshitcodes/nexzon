const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PWcYDCUHs9kPndg93lojqtc5lQxGNZQ927TBqUxrWhfY8vGvsK5UXaO4nEqlniwfmJqNLNdfgcbpabOOthDtUdu00Tee99JSK"
);

//API

//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  let total = req.query.total;

  console.log("Payment Request Recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://127.0.0.1:5001/lakshit-nexzon/us-central1/api
