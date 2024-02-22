import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000


var posts = {
    logs: [],
    titles: []
}

app.use(bodyParser.urlencoded({ extended: true })); /* to be able to use req.body to access users input */

app.use(express.static("public")) /* root of files for imgs, css and js */

app.get("/", (req, res) => {




    res.render("index.ejs")
})

//delete posts
app.post("/delete", (req, res) => {
    var id = req.body.blogId
    console.log(id)
    var newPosts = []
    for(var e = 0; e < logs.length; e++){
        if(logs[e].id !== parseInt(id)){
            newPosts.push(logs[e])
        }
    }
    logs = newPosts
    res.json({result: "post deleted"})

})



app.post("/",(req, res) => {
    
    var data = {
        blogTitle: req.body.title,
        log: req.body.blog
    }
    posts.logs.push(data.log)
    posts.titles.push(data.blogTitle)
    
    
    console.log(titles.slice(-1), logs.slice(-1)) // to access last item from array .slice(-1)
    res.render("index.ejs", {data, logs, titles})
})






app.listen(port, () => {
    console.log(`Running on port ${port}`)
})