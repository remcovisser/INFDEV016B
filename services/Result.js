'use strict';

module.exports = class Result {
    constructor() {
        this.collection = db.collection('results');
    }

    save(callback) {
      this.findByName('_id', '001', function(data) {
          console.log(data);
      });

      /*
        this.collection.insert([
          {
              _id: '001',
              levels:
                {
                  _id: 1,
                  name: 'C1',
                  subjects: [
                    {
                      name: "Quantifiers",
                      questions: [
                        {
                          answer: "many",
                          points: 0
                        }
                      ]
                    }
                  ]
                }
          }
        ]
      )
        */
      callback("test");
    }



    findByName(name, value, callback) {
        this.collection.find({ name: value }).toArray(function(err, data) {
            if (data.length == 0) {
                return callback(false);
            }

            return callback(data[0]);
        })
      }


};
