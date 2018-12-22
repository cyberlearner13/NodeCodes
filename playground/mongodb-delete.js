const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongo db server");
  }
  console.log("Connected to Mongodb server");

  const db = client.db("TodoApp");

  //deleteMany
  // db
  //   .collection("Todos")
  //   .deleteMany({ text: "Eat lunch" })
  //   .then(result => console.log(result));
  // deleteOne
  //  db.collection("Todos").deleteOne({ text: "Eat lunch" }).then(result => console.log(result))
  // findOneAndDelete
  // db.collection("Todos").findOneAndDelete({ text: "Eat lunch" }).then(result => console.log(result))


  //db.collection("Users").deleteMany({name: 'Auro'}).then(result => console.log(result));
  db.collection("Users").findOneAndDelete({_id: ObjectID('5c17c4b9852486e0f2ea8816')}).then(result => console.log(result));

});
