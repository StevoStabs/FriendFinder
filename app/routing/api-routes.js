var path = require('path');
var friends = require('../data/friends.js');


module.exports = function(app){
	app.get('/api/friends', function(req, res){

        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        
        // loop through each of user's scores
        // for(i=0; i<req.body.scores.length; i++){

        // }


        
        friends.push(req.body);
        res.json(req.body);

	});

}




// loop through each possible match
// for(i=0; i<friends.length; i++){

// 	friends[i].scores
// }