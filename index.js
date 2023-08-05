require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const healthRoute = require("./routes/HealthRoute");

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once("connected", () => console.log("Database Connected"));
mongoose.connection.on("error", (er) => console.log("Database Error:", er));

app.use("/health", healthRoute);

app.listen(process.env.SERVER_PORT, () =>
  console.log("app server started at 3000 port")
);
