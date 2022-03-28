const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.eltes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect( async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Database connected');
    console.time('Time used');

    let result = await client.db('Week03').collection('companies').insertOne({     
         name: 'Zenfolio',                                                          
         address: {
            street: '123 Main St',
             city: 'New York',
             state: 'NY',
             zip: '10001'
         }
       }); 
    
    console.log(result);
    console.log(result.insertedId);
    console.log(await client.db('Week03').collection('companies').countDocuments())
    

    client.db('Week03').collection('companies').deleteMany({   
        Name: 'Zenfolio'
    }).then(result => {
        console.log('Deleted ' + result.deletedCount + ' documents');
    });

    client.db('Week03').collection('companies').drop();

    console.log('Operation completed')
    console.timeEnd('Time used');
    
});
