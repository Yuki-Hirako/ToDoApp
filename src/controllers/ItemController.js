const Item = require("../models/Item");

module.exports = {
    async index(req, res) {
        const items = await Item.find();
        return res.json(items);
    },

    async store(req, res) {
        const { content } = req.body;
        const item = await Item.create({
            content,
        });
        return res.json(item);
    },
};
