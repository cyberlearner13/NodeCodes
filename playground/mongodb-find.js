const { MongoClient, ObjectID } = require('mongodb');

const obWan = new ObjectID();

console.log(`Hello There!! ${obWan}`);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
   if(err){
    return console.log('Unable to connect to mongo db server');
   }
   console.log('Connected to Mongodb server');

   const db = client.db('TodoApp');

   // db.collection('Todos').find({_id: new ObjectID('5c111a4d46d82714d803354b')}).toArray().then( docs => {
   //   console.log('todos');
   //   console.log(JSON.stringify(docs,undefined,2))
   // }, err => {
   //   console.log('Unable to fetch todos', err);
   // })

   // db.collection('Todos').find().count().then( count => {
   //   console.log(`todos count: ${count}`);
   //   console.log(JSON.stringify(docs,undefined,2))
   // }, err => {
   //   console.log('Unable to fetch todos', err);
   // })

   db.collection('Users').find({name:"Arkadeep"}).toArray().then( docs => {
     console.log(`Users`);
     console.log(JSON.stringify(docs,undefined,2))
   }, err => {
     console.log('Unable to fetch users', err);
   })

   //client.close();
});
