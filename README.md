ngularjs-grunt
==============

An Angularjs/Grunt skeleton with Coffeescript, Less support.

Use npm install to getch required node modules

grunt - compile site for production (including minification + image optimization)
grunt watch - observer code changes and update local deploy.

Known issues:
1. image optimization library (grunt-contrib-imagemin has a few known issues, will update to a new release when it becomes avilable)
2. Need to lunch a test server using grunt (can currently be lunched seperatly using node server.js)