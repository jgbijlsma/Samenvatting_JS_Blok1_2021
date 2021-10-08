const fs = require("fs");
const path = require("path");

function readAllItems() {
  const json = fs
    .readFileSync(path.resolve(__dirname, "../data/shop.json"))
    .toString();
  return JSON.parse(json);
}

function saveItem(item) {
  let json = fs
    .readFileSync(path.resolve(__dirname, "../data/shop.json"))
    .toString();
  const items = JSON.parse(json);
  items.push(item);
  json = JSON.stringify(items);
  fs.writeFileSync(path.resolve(__dirname, "../data/shop.json"), json);
}

module.exports = {
  readAllItems,
  saveItem,
};
