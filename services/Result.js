'use strict';

module.exports = class Result {
    constructor() {
        this.collection = db.collection('results');
    }

    save(callback) {

      this.collection.insert([
        {
            _id: '001',
            levels: [
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
            ]
          }
        ]
      )


      this.findResults('001', function(data) {
          data['levels'][0]['subjects'][0]['questions'][0]['points'] = 1;

          db.collection('results').remove({'_id' : '001'})
          db.collection('results').insert([data]);
      });





      callback("test");
    }



    findResults(value, callback) {
        this.collection.find({ _id: value }).toArray(function(err, data) {
            if (data.length == 0) {
                return callback(false);
            }

            return callback(data[0]);
        })
      }


};
