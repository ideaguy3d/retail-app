/**
 * Created by Julius Alvarado on 12/6/2016.
 */
var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/example'; 
mongodb.MongoClient.connect(uri, function(error, db){
    if(error){
        console.log(error);
        process.exit(1);
    }

    //movie document
    var doc = {
        title:'The Arrival',
        year: 2016,
        director: 'Steven Spielberg',
        rating: 'PG'
    };

    db.collection('movies').insert(doc, function(error, result){
        if(error){
            console.log(error);
            process.exit(1);
        }
        // if I use the node driver directly I have to chain .toArray() to the .find() query method.
        db.collection('movies').find().toArray(function(error, docs){
            if(error) {
                console.log(error);
                process.exit(1);
            }

            console.log("Found Movie Docs:");
            docs.forEach(function(doc){
                console.log(JSON.stringify(doc));
            });
            process.exit(0);
        });
    });

}); //----- END OF mongodb.MongoClient.Connect() -----\\


//\\