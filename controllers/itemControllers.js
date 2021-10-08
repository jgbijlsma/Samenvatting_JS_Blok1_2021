const itemModel = require("../models/itemModel");

function getItemsPage(req, res) {
  const items = itemModel.readAllItems();
  res.render("./items/items.ejs", { items });
}

function saveItem(req, res) {
  const item = req.body;
  itemModel.saveItem(item);
  res.redirect("/items");
}

module.exports = {
  getItemsPage,
  saveItem,
};
