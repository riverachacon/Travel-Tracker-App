import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000


const posts = []

/* var posts = {
    id: [],
    logs: [],
    titles: []
    }
*/

app.use(bodyParser.urlencoded({ extended: true })); /* to be able to use req.body to access users input */

app.use(express.static("public")) /* root of files for imgs, css and js */

app.get("/", (req, res) => {


    res.render("index.ejs", {data: posts})
})


/* New post */
app.post("/",(req, res) => {

    
    
    var inputs = {
        id: posts.length +1,
        blogTitle: req.body.title,
        log: req.body.blog 
    }
    posts.push(inputs)
    

    // console.log(posts)
    res.render("index.ejs", {data: posts})
})


/* direct to blogs.ejs for edition */
app.post("/blogs", (req, res) => {

    var id = parseInt(req.body.edit)
    const selectedPostPosition = posts.findIndex((x)=> x.id === id); //findIndex is to get position of post to edit in the array
    var postToEdit = posts[selectedPostPosition]

    // console.log("ID: ", id)
    // console.log("Position of post to edit: ", selectedPostPosition)
    // console.log("Post to edit: ", postToEdit)
    // console.log("Posts: ", posts)

    res.render("blogs.ejs", {currentPost: postToEdit, iden: id, posts: posts})
})

/* EDIT POST */
app.post("/update/:id", (req, res) => {
    var id = parseInt(req.params.id)
    //const selectedPost = posts.find((x) => x.id === id)
    const selectedPostPosition = posts.findIndex((x)=> x.id === id);

    var newInputs = {
        id: id,
        blogTitle: req.body.title || req.body.titleEdit,
        log: req.body.blog || req.body.blogEdit
    }

    posts[selectedPostPosition] = newInputs

    // console.log("New input: ", newInputs)
    // console.log("ID: ", id)
    // console.log("Position of post: ", selectedPostPosition)


    res.redirect("/")
})





/* DELETE POST */
app.post("/delete/:id", (req, res) => {
    var id = parseInt(req.params.id)
    const selectedPostPosition = posts.findIndex((x) => x.id === id)// position in array
   
    if(selectedPostPosition >= 0 ){
        posts.splice(selectedPostPosition, 1)

      } else{
        res.status(404).json({ error: "Post not found" });
      }
    // console.log("id: ", id)
    // console.log("selected post: ", selectedPost)
    

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