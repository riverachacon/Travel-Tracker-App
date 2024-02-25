import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000


var posts = []

// var posts = {
//     logs: [],
//     titles: []
// }

app.use(bodyParser.urlencoded({ extended: true })); /* to be able to use req.body to access users input */

app.use(express.static("public")) /* root of files for imgs, css and js */

app.get("/", (req, res) => {




    res.render("index.ejs")
})

//delete posts
app.post("/delete", (req, res) => {
    var id = req.body.blogId // id = div id
    console.log(id)
    var newPosts = []
    for(var e = 0; e< posts.length; e++){
        if(posts[e] !== parseInt(id)){
            newPosts.push(posts[e])
        }
    }
    posts = newPosts

})



app.post("/",(req, res) => {
    
    var data = {
        blogTitle: req.body.title,
        log: req.body.blog
        
    }
    posts.push(data)
    
    console.log(posts)

    
    res.render("index.ejs", {data, posts})
})



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})