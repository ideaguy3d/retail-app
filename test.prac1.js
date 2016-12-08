/**
 * Created by Julius Alvarado on 12/6/2016.
 */
var assert = require('assert');

describe('my feature', function(){
    it('works', function(){
        // 1st & 2nd params can obviously be functions
       assert.equal('A', 'A'); // changed 2 param
    });

    it('fails gracefully', function(){
        assert.throws(function(){
            throw "jError!"
        });
    });
});

describe('my other feature', function(){
    it('is an async call', function(done){
        setTimeout(function(){
            done();
        }, 25);
    })
});

//\\