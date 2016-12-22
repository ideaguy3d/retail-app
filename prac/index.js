/**
 * Created by Julius Alvarado on 12/15/2016.
 */
var mongoose = require('mongoose');
var schema = require('./schema.prac1');

mongoose.connect('mongodb://localhost:27017/test');

//parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
    name: 'Vitalius',
    email: 'vitalius@gmail.com'
});

user.save(function(error){
    if(error) {
        console.log(error);
        process.exit(1);
    }
    User.find({email: 'vitalius@gmail.com'}, function(error, docs){
        if(error) {
            console.log(error);
            process.exit(1);
        }
        console.log(require('util').inspect(docs));
        process.exit(0);
    });
});


//\\