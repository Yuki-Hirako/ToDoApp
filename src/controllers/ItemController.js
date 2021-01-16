const Item = require("../models/Item");

module.exports = {
    async store(req, res) {
        const { content } = req.body;
        const item = await Item.create({
            content,
        });
        return res.json(item);
    },
};
