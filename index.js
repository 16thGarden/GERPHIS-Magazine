const express = require('express')
const { engine } = require('express-handlebars')
const path = require("path")

const app = express();
const port = process.env.PORT || 9000;

app.engine("hbs", engine({
    extname: "hbs",
    defaultView: "main",
    layoutsDir: path.join(__dirname, "/views/layouts"), // Layouts folder
    partialsDir: path.join(__dirname, "/views/partials"), // Partials folder
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
}))

app.use(express.static("public"))
app.set("view engine", "hbs")

const server = app.listen(port, function() {
    console.log("App listening at port "  + port);
});

let imageCount = 26
var paths = []
for (var i = 0; i < imageCount; i += 2) {
    paths.push({
        front: "images/" + (i + 1) + ".png",
        back: "images/" + (i + 2) + ".png"
    })
}

app.get("/", function(req, res) {
    res.render("home", {
        title: "Dalisay - GERPHIS Magazine (Group Frog)",
        paths: paths
    });
})