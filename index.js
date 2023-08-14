require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const healthRoute = require("./routes/HealthRoute");
const authRoutes = require("./routes/AuthRoutes");

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["https://awaas-vishwa-hari.vercel.app"],
  })
);

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once("connected", () => console.log("Database Connected"));
mongoose.connection.on("error", (er) => console.log("Database Error:", er));

app.use("/health", healthRoute);
app.use("/api/v1/auth", authRoutes);

app.listen(3000, () => console.log("application is running on 3000 port"));
