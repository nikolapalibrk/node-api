const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
   if (error) {
      console.log('Unable to connect');
      return;
   }
   console.log('Connected to mongo server');

   db.collection('Todos').insertOne({
      text: 'Oprati macka',
      completed: false
   }, (error, result)=>{
      if (error) {
         console.log('Unable to insert');
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
   })
   

   db.close();
})