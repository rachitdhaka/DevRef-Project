require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const { AdminRouter } = require("./Router/admin");

app.use(cors());
app.use("/admin", AdminRouter);

app.get("/all", async (_req, res) => {
  try {
    const components = await mongoose.connection.db
      .collection("components")
      .find({})
      .toArray();
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const main = async () => {
  await mongoose.connect(process.env.mongoUrl);
  console.log("DataBase Connected");
  app.listen(1000);
};

main();
