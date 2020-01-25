const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const store = require('./utils/store')
const { MongoClient, ObjectID } = require('mongodb')
const app = express()

const port = 3000
    // const location = document.getElementsByName("location")
    // const report = document.getElementsByName("incident")
    // const Utime = Date.now()
    // var time = new Date(Utime)
    // dateString = time.toGMTString();

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Crime report'
    })

})

// app.get('/allTasks',(req,res)=>{ //get (go to) the allTasks (hbs file)
//     Todo.find().then((todos) => {
//       console.log(todos);
//       var arrayOfTodos = [];
//       todos.forEach(function(element){
//         console.log("\n\n\n\n\n elemnt details: ",element.text + "\n",element.completed+"\n");
//         arrayOfTodos.push(element.text,element.completed);
//        });
//        res.render("allTasks.hbs", {
//          pageTitle: "Your tasks: ",
//          todos: arrayOfTodos
//          });
//      });

//  });



app.get('/list', (req, res) => {

    ///---------------------------------

    const fetch = (callback) => {
        ///entering the IP
        const connectionURL = 'mongodb://127.0.0.1:27017'
        const databaseName = 'CrimeR'
        var arrayOfTodos = [];
        ///setting up connection.
        MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
            if (error) {
                return console.log('Unable to connect to database.')
            }
            const db = client.db(databaseName)

            //fetching
            db.collection('crime2').find({}).toArray((error, reports) => {
                // callback(reports)
                // console.log(db.collection('crime2'))

                db.collection('crime2').find().sort({ time: -1 }).toArray(function(err, result) {
                    arrayOfTodos = result;
                    console.log(result)
                    res.render("list", {
                        pageTitle: "Your tasks: ",
                        todos: arrayOfTodos
                    });
                })

            })

        })
    }

    ///---------------------------------
    fetch((response) => {
        res.render('list', {
            response: response
        })
    })

})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})