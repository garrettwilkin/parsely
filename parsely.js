// A browser module for the Parse.ly API - http://parsely.com/api
// requires jQuery.

var Parsely = function() {
  //private
  var root = 'http://api.parsely.com/v2/';
  //public
  var p = {};
  p.apikey = "blog.parsely.com";

  p.analytics = function () {
    var url = root + 'analytics/';

    this.posts = function(callback) {
      $.getJSON(url+'posts?apikey='+p.apikey+'&callback=?',callback);
    };
  };
  return p;
}();
