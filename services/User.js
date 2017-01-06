'use strict';

var Result = require('./Result.js');

module.exports = class User {
    constructor() {
        this.collection = db.collection('users');
    }

    all(callback) {
        this.collection.find({}).toArray(function(err, data) {
            callback(data);
        });
    }

    find(id, callback) {
        try {
            var object = ObjectId(id);
        }
        catch (e) {
            return callback(false);
        }

        this.collection.find({ _id: ObjectId(id) }).toArray(function(err, data) {
            if (data.length == 0) {
                return callback(false);
            }

            return callback(data[0]);
        })
    }

    authenticate(username, callback) {
        var that = this;

        this.collection.find({ username: username }).toArray(function(err, result) {

            // Check if exists
            if (result.length != 0) {
                callback(result[0]);
                return;
            }

            that.collection.insertOne({ username: username }, function(err, res) {
                // Create new result record in database.
                var result = new Result();
                var seederData = result.newResult(username);
                db.collection('results').insertMany(seederData);

                callback(res.ops[0]);
            });
        });
    }

    static validateUsername(name) {
        return /^[0-9]+$/.test(name);
    }


    static isGuest(req, res, next) {
        // Check if auth cookie is defined
        if (req.cookies.userId == undefined) {
            return next();
        }

        var that = new User();

        that.find(req.cookies.userId, function(result) {
            if (result) {
                res.redirect('/levels');
                return;
            }

            that.logOut(res);
            return next();
        });
    }

    static isAuthenticated(req, res, next) {
        // Check if auth cookie is defined
        if (req.cookies.userId == undefined) {
            res.redirect('/?errors[global]=unauthenticated');
            return;
        }

        var that = new User();

        that.find(req.cookies.userId, function(result) {
            if (!result) {
                res.redirect('/?errors[global]=unauthenticated');
                return;
            }

            app.locals.currentUser = result;
            return next();
        });
    }

    logOut(res) {
        // Remove cookie
        delete app.locals.currentUser;
        res.cookie('userId', '', { expires: new Date() });
    }
};
