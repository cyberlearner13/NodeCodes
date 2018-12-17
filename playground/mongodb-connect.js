const { MongoClient, ObjectID } = require('mongodb');

const obWan = new ObjectID();

console.log(`Hello There!! ${obWan}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
   if(err){
    return console.log('Unable to connect to mongo db server');
   }
   console.log('Connected to Mongodb server');

   const db = client.db('TodoApp');

   // db.collection('Todos').insertOne({
   //   text:'Something to do',
   //   completed: false
   // },(err, result) => {
   //   if(err){
   //       return console.log('Unable to insert todo',err);
   //   }
   //
   //   console.log(JSON.stringify(result.ops,undefined,2))
   // });

   // db.collection('Users').insertOne({
   //   name:'Auro',
   //   age: 736,
   //   location:'Everywhere'
   // },(err, result) => {
   //   if(err){
   //       return console.log('Unable to insert todo',err);
   //   }
   //
   //   //console.log(JSON.stringify(result.ops,undefined,2))
   //   console.log(result.ops[0]._id.getTimestamp())
   //
   // });

   client.close();
});
