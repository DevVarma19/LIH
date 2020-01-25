const { MongoClient, ObjectID } = require('mongodb')


const fetch = (callback) => {
    ///entering the IP
    const connectionURL = 'mongodb://127.0.0.1:27017'
    const databaseName = 'CrimeR'

    ///setting up connection.
    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to database.')
        }
        const db = client.db(databaseName)

        //fetching
        db.collection('crime2').find({}).toArray((error, reports) => {
            callback(reports)
        })

    })
}

module.exports = fetch

fetch()