const { Router } = require("express");
const ItemController = require("./controllers/ItemController");

const routes = Router();

routes.post("/items/create", ItemController.store);
routes.get("/items/read", ItemController.index);
routes.put("/items/update", ItemController.update);
module.exports = routes;
