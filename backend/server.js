// const express = require("express");
// const app = express()
// app.get("/", (req, res) => {
//     return res.send("home1");
// }); 1


// app.listen(8000, () => {
//     console.log('seRver is working')
// })





// const path = require("path");
// const express = require("express");
// const morgan = require("morgan");
// const hbs = require('express-handlebars');
// const port = 4500;
// //HTTP logger
// app.use(morgan("combined"));
// //Template engine
// app.engine('handlebars', hbs.engine());
// app.set("view engine", "handlebars");
// app.set("views", path.join(__dirname, "resources", "views"));

// app.get("/", (req, res) => {
//     res.render("home");
// });
// app.listen(port, () => {
//     console.log(`excample app listening at http://localhost:${port}`);
// });


const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
// const fileUpload = require("express-fileupload");
// const { readdirSync } = require("fs");
// const dotenv = require("dotenv");
const options = {
    origin: "http://localhost:3000",
    useSuccessStatus: 200,
}
// dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(options));
// app.use(
//     fileUpload({
//         useTempFiles: true,
//     })
// );

app.get("/", (req, res) => {
    return res.send("home1");
});


app.listen(8000, () => {
    console.log('server is working...')
})

//routes
// readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
// mongoose
//     .connect(process.env.DATABASE_URL, {
//         useNewUrlParser: true,
//     })
//     .then(() => console.log("database connected successfully"))
//     .catch((err) => console.log("error connecting to mongodb", err));

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}..`);
// });

