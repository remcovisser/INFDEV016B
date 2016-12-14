A NodeJS Express application build in ECMAScript 6.

[![Build Status](http://95.85.2.218:8080/buildStatus/icon?job=nodejs-app)](http://95.85.2.218:8080/job/nodejs-app)

#Installation
###To install (and update) dependencies
`npm install`

To install global dependencies:
* `npm install nodemon -g`
* `npm install gulp -g`

###To start server
_Do not forget to start your MongoDB server first_ (run mongod)
* Compile once: `npm server` or `npm run server`
* Recompile in realtime: `npm server-dev`
* The server runs on localhost:3000
* To seed database: `npm run seed`
* Compile server once: `npm run server`
* Recompile server in realtime: `npm run server-dev`

###Compile SASS and JS
* Compile once: `npm run frontend`
* Recompile in realtime: `npm run frontend-dev`

###Requirements
* Node v6.9.*
* MongoDB v3.2.*
* Nodemon v1.11.*
* Gulp v3.9.*
