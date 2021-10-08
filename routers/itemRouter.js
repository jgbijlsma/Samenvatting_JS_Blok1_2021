const itemControllers = require("../controllers/itemControllers");

const router = require("express").Router();

// alles begint met /items

router.get("/", itemControllers.getItemsPage);
router.post("/", itemControllers.saveItem);

module.exports = router;
