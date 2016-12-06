'use strict';

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
        catch(e) {
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

            // Create new user
            that.collection.insertOne({
                username: username
            }, function(err, res) {
                callback(res.ops[0]);
            });
        });
    }

    static isGuest(req, res, next) {
        var collection = db.collection('users');

        if (req.cookies.userId == undefined) {
            return next();
        }

        collection.find({ _id: ObjectId(req.cookies.userId) }).toArray(function(err, result) {
            // User not found
            if (result.length != 0) {
                res.redirect('/levels');

                return;
            }

            // Remove cookie
            req.cookie('userId', '', { expires: new Date() });
            return next();
        });
    }

    static isAuthenticated(req, res, next) {
        var collection = db.collection('users');

        collection.find({ _id: ObjectId(req.cookies.userId) }).toArray(function(err, result) {
            // User not found
            if (result.length == 0) {
                res.redirect('/?errors[global]=unauthenticated');
                return;
            }

            global.CurrentUser = result[0];

            return next();
        });
    }
};
