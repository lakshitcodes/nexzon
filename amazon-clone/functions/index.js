const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const testKey="sk_test_51PWcYDCUHs9kPndg93lojqtc5lQxGNZQ927TBqUxrWhfY8vGvsK5UXaO4nEqlniwfmJqNLNdfgcbpabOOthDtUdu00Tee99JSK";
const stripe = require("stripe")(testKey);

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });
    res.status(201).send({clientSecret: paymentIntent.client_secret});
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({error: "Failed to create payment intent"});
  }
});

// Listen Command
exports.api = functions.https.onRequest(app);
