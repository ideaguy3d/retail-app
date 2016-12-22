/**
 * Created by Julius Alvarado on 12/16/2016.
 */

var mongoose = require('mongoose');
var userSchema = require('./user.schema');

var User = mongoose.model('User', userSchema);

var u = new User({
    profile: { username: 'ideaguy3d' }
});

modifyUserProfile(u, { picture: 'http://www.juliusalvarado.info/css/img/ideaguy.png' },
    function () {
        // do some really cool awesome javascript stuff
        console.log("modifyUserProfile called me;)");
    }
);

// this function can only modify user.profile, not user.data;
function modifyUserProfile(user, profile, cb) {
    user.profile = profile;
    user.save(function (error, user) {
        if(error) console.log(error);
        cb();
    })
}

//\\