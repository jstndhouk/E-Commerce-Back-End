const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategoriesData = await Category.findAll({});
    //console.table(allCategoriesData)
    res.status(200).json(allCategoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCategoryData = await Category.findByPk(req.params.id,
      {
      include: [{model: Product}]
      });
   
      if (!singleCategoryData) {
        res.status(404).json({ message: 'No category ID found with that id!' });
        return;
      }
    
    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
