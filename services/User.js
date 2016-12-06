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
};
