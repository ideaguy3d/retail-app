/**
 * Created by Julius Alvarado on 12/7/2016.
 */
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function(){
    gulp.src('./test.prac1.js')
        .pipe(mocha())
        .on('error', function(err){
            console.log("in error callback");
            this.emit('end');
        })
});

gulp.task('watch', function(){
    gulp.watch('./*.js', ['test']);
});


//\\