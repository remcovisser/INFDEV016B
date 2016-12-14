'use strict';

module.exports = class Result {
    constructor() {
        this.collection = db.collection('results');
    }

    save(level, subject, question, points, answer, userId, callback) {
      this.findResults(userId, function(data) {
          if(data) {
            //data['levels'][level]['subjects'][subject]['questions'][question]['points'] = points;
            //data['levels'][level]['subjects'][subject]['questions'][question]['answer'] = answer;
            db.collection('results').remove({'_id' : userId})
            db.collection('results').insert([data]);
          } else {
            var levels = ["C1", "C2", "B2", "B1", "A2", "A1"];
            var subjects = ["Word order", "Quantifiers", "Capitalization", "Spelling", "Reading comprehension", "Questions"];
            var seederData = ['levels'];
              seederData[0]['levels'][0].push({'name':'C1'});
            for(var i=0; i<levels.length; i++) {

                seederData[0]['levels']['name'] = levels[i];
                for(var x=0; x<subjects.length; x++) {
                    seederData['levels']['name'][levels[i]]['name'] = subjects[x];
                }
            }
            console.log(seederData);

            db.collection('results').insert([
              {
                  _id: userId,
                  levels: [
                    {
                      name: level,
                      subjects: [
                        {
                          name: question,
                          questions: [
                            {
                              answer: answer,
                              points: points
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            )
          }
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
