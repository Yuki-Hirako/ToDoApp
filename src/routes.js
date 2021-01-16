const { Router } = require("express");
const Item = require("./models/Item");

const routes = Router();

routes.post("/items", ItemController.store);
routes.get("/items", ItemController.index);

module.exports = routes;
