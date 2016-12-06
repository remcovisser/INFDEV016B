A NodeJS Express application build in ECMAScript 6.

#Installation
###To install (and update) dependencies
`npm install`

To install global dependencies:
* `npm install nodemon -g`
* `npm install gulp -g`

###To start server
_Do not forget to start your MongoDB server first_
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
* ACMAScript 6