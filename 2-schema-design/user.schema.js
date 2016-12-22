/**
 * Created by Julius Alvarado on 12/16/2016.
 */

var mongoose = require ('mongoose');

module.exports = new mongoose.Schema({
    profile: {
        username: {
            type: String,
            required: true,
            lowercase: true
        },
        picture: {
            type: String,
            required: true,
            match: /^http:\/\//i
        }
    },
    data: {
        oath: {type: String, required: true},
        cart: [{
            product: {
                type: mongoose.Schema.Types.objectId
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            }
        }]
    }
});

var userObj = {
    profile: {
        username: {
            type: String,
            required: true,
            lowercase: true
        },
        picture: {
            type: String,
            required: true,
            match: /^http:\/\//i
        }
    },
    data: {
        oath: {type: String, required: true},
        cart: [{
            product: {
                type: mongoose.Schema.Types.objectId
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            }
        }]
    }
};

modolue.exports.userSchema = userObj;


//\\