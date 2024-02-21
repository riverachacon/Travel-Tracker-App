import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000

var logs = []
var titles = []

app.use(bodyParser.urlencoded({ extended: true })); /* to be able to use req.body to access users input */

app.use(express.static("public")) /* root of files for imgs and css */

app.get("/", (req, res) => {




    res.render("index.ejs")
})


app.post("/",(req, res) => {
    
    var data = {
        blogTitle: req.body.title,
        log: req.body.blog
    }
    logs.push(data.log)
    titles.push(data.blogTitle)
    
    
    console.log(logs.slice(-1), titles.slice(-1)) // to access last item from array .slice(-1)
    res.render("index.ejs", {data, logs, titles})
})

app.put("/edit/:id", (req, res) => {

});

app.delete("/delete/:id", (req, res) => {

    

})




app.listen(port, () => {
    console.log(`Running on port ${port}`)
})