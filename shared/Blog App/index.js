import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000


const posts = []

/* var posts = {
        logs: [],
        titles: []
    }
*/

app.use(bodyParser.urlencoded({ extended: true })); /* to be able to use req.body to access users input */

app.use(express.static("public")) /* root of files for imgs, css and js */

app.get("/", (req, res) => {


    res.render("index.ejs", {data: posts})
})



app.post("/",(req, res) => {

    
    
    var inputs = {
        blogTitle: req.body.title,
        log: req.body.blog 
    }
    if(inputs.blogTitle !== undefined && inputs.log !== undefined){
        posts.push(inputs)
        
    }

    var id = req.body.id
    var newTitle = req.body.titleEdit
    var newLog = req.body.logEdit
    if(newLog !== undefined && newTitle !== undefined){
        posts[id].log = newLog
        posts[id].blogTitle =  newTitle
    
    }
    
    
    // console.log(posts)
    // console.log(`inputs: ${inputs.blogTitle}, ${inputs.log}`)
    // console.log(`new inputs: ${newLog}, ${newTitle}`)
    
    
    res.render("index.ejs", {data: posts})
})


app.post("/blogs", (req,res) =>{
    
    //position in array to edit
    var editPos = req.body.edit
    // post to edit
    var postEdit = posts[editPos]
    res.render("blogs.ejs", {currentPost: postEdit, id: editPos})
})

app.post("/delete", (req, res) => {
    // position of post to delete
    var deletePos = req.body.delete
    posts.splice(deletePos, 1)
    res.redirect("/")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
})



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})