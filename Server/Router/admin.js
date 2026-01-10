const { Router, json } = require("express");
const Component = require("../DataBase/db");
const AdminRouter = Router();

AdminRouter.use(json());

AdminRouter.post("/add-component", async (req, res) => {
  try {
    const { componentName, inspiredName, inspiredLink, code, mediaLink } =
      req.body;

    const newComponent = new Component({
      componentName,
      inspiredPerson: inspiredName,
      inspiredLink,
      code,
      mediaLink,
    });

    await newComponent.save();
    res
      .status(201)
      .send({ message: "Component added successfully", data: newComponent });
  } catch (error) {
    console.error("Error adding component:", error);
    res
      .status(500)
      .send({ message: "Error adding component", error: error.message });
  }
});

module.exports = { AdminRouter };
