/* GET home page. */
exports.index = function(req, res) {
  //var locations = require('../all-branches.json');
  var locations;
  var fs = require('fs');
  var file = __dirname + '/all-branches.json';
  
  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    res.render('index', { title: 'Express', locations: data });
  });


  return ;
};
