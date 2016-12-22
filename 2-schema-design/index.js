/**
 * Created by Julius Alvarado on 12/15/2016.
 */

var mongoose = require('mongoose');
var categorySchema = require('./category.schema');

mongoose.connect('mongodb://localhost:27017/products');

var Category = mongoose.model('Category', categorySchema, 'categories');

var categoryPhone = new Category({
    _id: 'Phones',
    parent: 'Electronics',
    ancestors: ['Phones', 'Electronics']
});

var categoryAndroid = new Category({
    _id: 'Android',
    parent: 'Phones',
    ancestors: ['Android', 'Phones', 'Electronics']
});

categoryPhone.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    Category.find({_id: 'Phones'}, function(error, docs){
        if(error) {
            console.log(error);
            process.exit(1);
        }
        console.log(require('util').inspect(docs));
        process.exit(0);
    });
});

categoryAndroid.save(function(error){
    if(error) {
        console.log(error);
        process.exit(1);
    }
});

//\\