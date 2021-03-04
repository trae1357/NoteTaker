const express = require("express");
const app = express()

const PORT = process.env.PORT ||  8028;

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

require("./routes/apiRoutes")(app)
require("./routes/HTMLroutes")(app)
 
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(` http://localhost:${PORT}`);
});


