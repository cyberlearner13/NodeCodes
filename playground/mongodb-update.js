const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongo db server");
  }
  console.log("Connected to Mongodb server");

  const db = client.db("TodoApp");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c1e06bd49d863a41cde0ee2')
  // }, {
  //   $set:{
  //     completed:true
  //   },
  // },{
  //     returnOriginal: false
  // }).then(result => console.log(result))

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c111c0af424f00b64d19ed6')
  }, {
    $inc:{
      age: 1
    },
  },{
      returnOriginal: false
  }).then(result => console.log(result))
});
