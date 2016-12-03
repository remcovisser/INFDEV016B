'use strict';

module.exports = class Level {
    constructor() {
        this.collection = db.collection('exercises');
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
};
