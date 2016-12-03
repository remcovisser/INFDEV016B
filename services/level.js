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
        this.collection.find({ _id: ObjectId(id) }).toArray(function(err, data) {
            callback(data[0]);
        })
    }
};
