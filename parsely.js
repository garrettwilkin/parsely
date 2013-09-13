// A browser module for the Parse.ly API - http://parsely.com/api
// requires jQuery.

var Parsely = function() {
  //private
  var root = 'http://api.parsely.com/v2/';
  //public
  var p = {};
  
  p.analytics = function () {
    var url = root + 'analytics/';

    this.posts = function(key,params,callback) {
      var params = jQuery.param(params);
      if (params != '') {
        params = '&' + params;
      }
      $.getJSON(url+'posts?apikey='+key+params+'&callback=?',callback);
    };

    this.authors = function(key,params,callback) {
      var params = jQuery.param(params);
      if (params != '') {
        params = '&' + params;
      }
      $.getJSON(url+'authors?apikey='+key+params+'&callback=?',callback);
    };
  };

  return p;
}();
