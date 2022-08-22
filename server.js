const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

const indexRouter = require("./routes/index");
const staffsRouter = require("./routes/staffs");

app.use("/", indexRouter);
app.use("/staffs", staffsRouter);
app.listen(process.env.PORT || 3000);
