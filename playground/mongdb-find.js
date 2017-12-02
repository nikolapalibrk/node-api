const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db)=>{
   if (error) {
      console.log('Unable to connect');
      return;
   }
   console.log('Connected to mongo server');

   db.collection('Todos').find({ $or: [ { text: 'neka' }, { text: 'alo' } ] }).toArray().then((data)=>{
      console.log(JSON.stringify(data, undefined, 2));
   }, (error)=>{
      if (error) {
         console.log('Unable to fetch');
      }
   })
   

   db.close();
})