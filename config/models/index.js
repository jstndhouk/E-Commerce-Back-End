// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Relationship between products and category

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});



//Relationship between products and tags
// Products can belong to many tags through the product tag junction table
Product.belongsToMany(Tag, {
  through: {model: ProductTag, unique: false, sourceKey: 'product_id', targetKey: 'tag_id' },
});
// Tags can belong to many products through the product tag junction table
Tag.belongsToMany(Product, {
  through: {model: ProductTag, unique: falsem, sourceKey: 'tag_id', targetKey: 'product_id' },
});



// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
