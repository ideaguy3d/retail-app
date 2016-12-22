/*
 *  Inserts "doc" into the collection "movies".
 */
// var test = require('assert');

exports.insert = function (db, doc, callback) {
    db.collection('movies').insert(doc, function (error, result) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
    });
    callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function (db, zdirector, callback) {
    db.collection('movies').find({director: zdirector})
        .toArray(function (error, directorsArray) {
            console.log("-------> The directorsArray ===");
            console.log(directorsArray);

            // implement an algorithm that'll sort an array of objects in
            // alphabetical order based on the value of the director key.
            directorsArray.sort(function (a, b) {
                var aVal = a.title[0];
                console.log("-----> a.director[0] === "+aVal);
                var bVal = b.title[0];
                console.log("-----> b.director[0] === "+bVal);

                if (aVal < bVal) return -1;
                if (aVal > bVal) return 1;
                return 0; // they're equal

            }); //----- END OF: sorting algorithm -----\\

            callback(error, directorsArray);
        });

    /**
     //----- just to see the ouput:
     .toArray(function(error, movieArray){
      console.log('Hopefully the movies show up:'); 
      movieArray.forEach(function(movieElement){
          console.log(movieElement);
      });
     });

     //----- to sort, i think.
     .sort({'title': 1})
     .nextObject(function(err, item) {
      test.equal(null, err);
      test.equal(1, item.title); 
     });
     **/
};