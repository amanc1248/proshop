import express from "express";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleWare/middleWare.js";
dotenv.config();
connectDB();
const app = express();
app.use((req, res, next) => {
  console.log("hello");
  next();
});
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
