const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, cb) {
  var params = {
    Item:{
      question_number: 0,
      question_text: 'What is HTML ?',
      answer: 'HTML stands for Hypertext Markup Language',
      app_name: 'HTML'
    },
    TableName: 'interview_questions'
  }

  docClient.put(params, function(err, data){
    if(err){
      cb(err, null);
    }
    else{
      cb(null, data);
    }
  })
}
