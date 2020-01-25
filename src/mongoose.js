var express = require("express"),
    app = express(),
    bodyparser = require("body-parser"),
    mongoose = require("mongoose"),
    path = require('path');
mongoose.connect("mongodb://localhost:27017/LIH", { useNewUrlParser: true, useCreateIndex: true });

app.use(bodyparser.urlencoded({ extended: true }));

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicDirectoryPath))


var schema = new mongoose.Schema({
    location: String,
    time: String,
    report: String,
}, { collection: 'crime2' })

var detailsModel = mongoose.model("crime2", schema);
app.get("/", function(req, res) {
    res.render("index", { details: null })
})
app.get("/index", function(req, res) {
    detailsModel.find({}, function(err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            console.log(allDetails)
            res.render("index", { details: allDetails })
        }
    })
})
app.listen(3000, "localhost", function() {
    console.log("server has started");
})