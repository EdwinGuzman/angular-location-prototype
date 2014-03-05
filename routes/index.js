/* GET home page. */
exports.index = function(req, res) {
  var locations = require('../all-branches');

  res.render('index', { title: 'Express', locations: locations });

  return ;
};
