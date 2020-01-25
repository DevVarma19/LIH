const { MongoClient, ObjectID } = require('mongodb')


const store = (longitude, latitude, location, time, report, callback) => {
    ///entering the IP
    const connectionURL = 'mongodb://127.0.0.1:27017'
    const databaseName = 'CrimeR'

    ///setting up connection.
    MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            return console.log('Unable to connect to database.')
        }
        const db = client.db(databaseName)

        //Inserting
        db.collection('crime2').insertOne({
            longitude: longitude,
            latitude: latitude,
            location: location,
            time: time,
            report: report
        }, (error, result) => {
            if (error) {
                return console.log('Unable to enter the data')
            }
            ///ops returns the collection that we inserted. It is an array
            // console.log(result.ops)
            callback(result.ops)
        })


    })
}

module.exports = store