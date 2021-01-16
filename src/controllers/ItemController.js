const { update } = require("../models/Item");
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

    async update(req, res) {
        const { id, newContent } = req.body;
        const item = await Item.findById(id);
        if (item) {
            item.content = newContent;
            await item.save();
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    },
};
