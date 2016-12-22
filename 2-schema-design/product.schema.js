/**
 * Created by Julius Alvarado on 12/12/2016.
 */
var mongoose = require('mongoose');
var Category = require('./category.schema');

var productSchema = {
    name: {type: String, required: true},
    // pics must start w/an "http://"
    pictures: [{type:String, match: /^http:\/\//i}],
    price: {
        amount: {type: Number, required: true},
        currency: {
            type: String,
            enum: ['USD', 'EUR', 'GBP'],
            required: true
        }
    },
    // .category is a plain js obj, not a mongoose.Schema()
    category: Category.categorySchema
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;



//\\