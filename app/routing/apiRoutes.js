
var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
   var newUser = req.body;
   console.log(newUser);
  

//to compare new user to friends

var differences = [];

friendsData.forEach(function(friend){

    var totalDifference = 0;

    for (var i = 0; i < newUser.scores.length; i++){
        var difference = friend.scores[i] - parseInt(newUser.scores[i]);
        totalDifference += Math.abs(difference);
        // console.log(totalDifference);
    }
    differences.push(totalDifference);
});

// console.log(differences);

var leastDiff = Math.min.apply(null, differences);

var bestMatch;

for(var i = 0; i < differences.length; i++){
    if(differences[i] === leastDiff){
        bestMatch = friendsData[i];
    }
}
res.json(bestMatch);
friendsData.push(newUser);
});
}