const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'});

exports.handle = function(e, ctx, cb) {
  if(e.question_number && e.question_text && e.answer && e.app_name){
    var params = {
      Item:{
        question_number: e.question_number,
        question_text: e.question_text,
        answer: e.answer,
        app_name: e.app_name,
        question_description: e.question_description || null
      },
      TableName: 'interview_questions'
    }
  }
  else{
    cb(new Error('Data Incomplete'),null);
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
