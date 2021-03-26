const Category = require("../model/category.js")


  //to create category
  exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
      if (err) {
        return res.status(400).json({
          error: "NOT able to save category in DB"
        });
      }
      res.json({ category });
    });
  };
  
 //to read all category
 exports.getAllCategory = (req, res) => {


  Category.find().exec((err,categories)=>
  {
   if (err) {
      return res.status(400).json({
        error: "NOT able to save category in DB"
      });
    }
    res.json({ categories });
  });
};

exports.getCategoryById = (req, res, next, id) => {
  Category.findById(id)
    // .populate("category")
      // req.category = productData;
    .exec((err, categoryData) => {
      if (err) {
        return res.status(400).json({
          error: "Catrgory not found"
        });
      }
      req.category = categoryData;
      next();
    });
};

exports.removeCategory = (req, res) => {
  const category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to delete this category"
      });
    }
    res.json({
      message: "Successfull deleted"
    });
  });
};

  exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err,updatedCategory)=>
    {
      if(err){
        return res.status(400).json({
          error:"Failed to upadte category"
        });
     }
     res.json(updatedCategory);
    });
  };  


