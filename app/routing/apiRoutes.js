
var friendsData = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
   var newFriend = req.body;
   console.log(newFriend);
    
  });
}; // to close function