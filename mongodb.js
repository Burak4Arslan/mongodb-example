//CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID();
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,
    {useNewUrlParser: true}, (error,client)=> {

        if(error) {

            return console.log(error);

        }

        const db = client.db(databaseName);
    {
        // db.collection('users').findOneAndReplace( {
        //     name: 'Andrew',
        //     age: 100

        // },{
        //     name: 'Bigoş',
        //     age: 21

        // }, (error,result) => {

        //     console.log(result);

        // })

        // db.collection('users').insertOne( {
        //     name: 'Andrew',
        //     age: 100

        // }, (error,result) => {

        //     console.log(result.ops);

        // })


        // db.collection('users').insertMany([
        //     {
        //         name: 'Jen',
        //         age: 28
        //     }, {
        //         name: 'Gunther',
        //         age: 21
        //     }

        // ], (error,result) => {
            
        //     if(error) {
        //         return console.log(error)
        //     }

        //     console.log(result.ops)

        // })

        // db.collection('users').findOne({_id:
        //     new ObjectID('5d2f0b7a72e67e1810cb5dcd')},
        // (error,user)=>{
        //     if(error) {
        //         return console.log('An Error Occuired');
        //     }

        //     console.log(user);

        // })

        // db.collection('users').find({ age:21 })
        // .toArray((error,users)=> {

        //     console.log(users);

        // });

        // db.collection('tasks').find({ age:21 })
        // .count((error,count)=> {

        //     console.log(count);

        // });
    }

    // const updatePromise =
    // db.collection('users').updateOne({name: 'Gunther'
    // }, {
    //     $set:{
    //         name: 'Burak'
    //     }
    // });

    // updatePromise.then((result)=> {
    //     console.log(result);
    // })

    // updatePromise.catch((error)=> {
    //     console.log(error);
    // })


    // db.collection('users').updateOne({name: 'Burak'
    // }, {
    //     $inc:{
    //         age: -1
    //     }
    // });

    // db.collection('users').updateMany({},{
    //     $inc: {
    //         age: -7
    //     }
    // })

    db.collection('users').deleteOne({name:'Jen'});

});