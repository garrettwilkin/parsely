Parsely
=======

A Parsely javascript client for the browser.

Example
=======
Here's how to use the client to request 9 posts & sort by title:
```
  var analytics = new Parsely.analytics();
  analytics.posts(key,{limit:9, sort:'title'},callback}
```
  

Install
=======

This repo comes with an example `index.html` which demonstrates the API calls.  To evaluate it locally

 * Clone the repo `git clone git@github.com:garrettwilkin/parsely.git`
 * Serve the page 
   * `cd parsely`
   * `npm install node-static`
   * `node server.js`
   * visit [localhost:1337](http://localhost:1337/)

Reference
=========
  * [Parsely API docs](http://parsely.com/api)
