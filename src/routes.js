const { Router } = require("express");
const Item = require("./models/Item");

const routes = Router();

routes.post("/items", async (req, res) => {
    const { content } = req.body;
    const item = await Item.create({
        content,
    });
    return res.json(item);
});

module.exports = routes;
