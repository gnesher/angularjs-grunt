ngularjs-grunt
==============

An Angularjs/Grunt skeleton with Coffeescript, Less support.

Use npm install to getch required node modules

grunt - compile site for production (including minification + image optimization)
grunt server - lunches a server on port 9001 and watch changes to the code.
grunt rebuild-dev - will quickly rebuild the site (without minifying etc. used for grunt server)

Known issues:
1. image optimization library (grunt-contrib-imagemin has a few known issues, will update to a new release when it becomes avilable)
