import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "holi654",
  port: 5432
})
db.connect();



// db.query("SELECT * FROM visited_countries", (err, res) => {
//   if(err){
//     console.log("Error executing query", err.stack)
//   } else{
//     visitedCountries = res.rows
//   }
//   db.end()
// })






app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



async function visited(){
  let visitedCountries = []

  let data = await db.query("SELECT country_code FROM visited_countries")
  visitedCountries = data.rows

  let totalCountries = visitedCountries.length
  let codesArray = []



  for(let i = 0; i < totalCountries; i++){
    let countriesCode = visitedCountries[i].country_code
    codesArray.push(countriesCode)
  }


  return codesArray

}


app.get("/", async (req, res) => {
  //Write your code here.
  try {
    let countriesCode = await visited()


    console.log("FUNCTION VISITED(): ",  countriesCode)
    res.render("index.ejs",{total:countriesCode.length, countries: countriesCode}  )
    
  
    //db.end() // closing db when succeeds, dont neet to close the DB if you r using it throughout the app
    
  } catch (err) {
    
    console.error("Error executing query", err.stack);
    res.status(500).send("Internal Server Error");
    //db.end()// closing db if error
  }

});




app.post("/add", async(req, res) => {
  let newCountry = req.body.country.slice(0, 1).toUpperCase() + req.body.country.slice(1, req.body.country.length).toLowerCase()
  // console.log(newCountry)


  try {
    let data= await db.query("SELECT country_code FROM countries WHERE country_name LIKE '%' || $1 || '%'", [newCountry])
    let inputCountryCode = data.rows[0].country_code

    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES($1)", [inputCountryCode])
      res.redirect("/")

    } catch (err) {
      let totalCountries =  await visited()
      console.log("TOTAL: ", totalCountries) 
      console.log("E R R O R: ",err)
      res.render("index.ejs", {error: "country already exists", total:  totalCountries.length, countries: totalCountries})
      
    }
    
  } catch (err) {
    console.log("E R R O R 2: ",err)
    console.log("INPUT COUNTRY CODE: ", data)

  }

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


