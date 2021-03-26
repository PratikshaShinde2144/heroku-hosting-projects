const express = require('express')

const router = express.Router();

const {createCategory} = require("../controller/category.js");
const {getAllCategory} = require("../controller/category.js");
const {getCategoryById} = require("../controller/category.js");
const {removeCategory} = require("../controller/category.js");
const {updateCategory} = require("../controller/category.js");

router.param("categoryId", getCategoryById);

router.post("/category/create/",createCategory);
router.get("/category/getAllCategories/",getAllCategory);
// router.post("/removeCategory",getAllCategory);
router.delete("/category/:categoryId",removeCategory);
router.put("/category/:categoryId",updateCategory);
  



module.exports = router;

