/**
 * Created by Julius Alvarado on 12/7/2016.
 */
var mongodb = require ("mongodb");
var uri = "mongodb://localhost:27017/example";

mongodb.MongoClient.connect(uri, function(error, db){
    if(error){
        console.log(error);
        process.exit(1);
    }

    var doc = {
        "movies": [
            {
                "title": "Star Wars",
                "year": 1977,
                "director": "George Lucas"
            },
            {
                "title": "The Empire Strikes Back",
                "year": 1980,
                "director": "Irvin Kershner"
            },
            {
                "title": "Return of the Jedi",
                "year": 1983,
                "director": "Richard Marquand"
            },
            {
                "title": "The Phantom Menace",
                "year": 1999,
                "director": "George Lucas"
            },
            {
                "title": "Attack of the Clones",
                "year": 2002,
                "director": "George Lucas"
            },
            {
                "title": "Revenge of the Sith",
                "year": 2005,
                "director": "George Lucas"
            },
            {
                "title": "The Force Awakens",
                "year": 2015,
                "director": "J.J. Abrams"
            }
        ]
    };

    var complexDoc = {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberg',
        rating: 'PG',
        ratings: {
            critics: 90,
            audience: 97
        },
        screenplay: ['Peter Benchley', 'Carl Gotlieb']
    };

    db.collection('movies').insert(doc, function(error, docs){
        // check for error.
        var and_query = {year: 1975, director: 'George Lucas'};

        //query the document I just inserted.
        db.collection('movies').find(and_query).toArray(function(error, movies){
            //if error do something

            // if I actually wanted to see what was in the movies collection
            /*
             console.log("Movies in DB:");
             movies.forEach(function(movie){
                console.log(movie);
             });
            */
        });
    });

    db.collection('movies').insert(complexDoc, function(error, result){
        db.collection.find({'ratings.audience': {'$gte': 90}});
    });
    
}); //----- END OF mongo.MongoClient.connect() -----\\
//\\