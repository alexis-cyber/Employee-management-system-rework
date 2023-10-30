const express = require ("express");
const app = express();
const connection = require ("./connection");
const cors = require ("cors");
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());
// app.use("/images", express.static(path.join(--__dirname, images)))

const employeeRoutes = require("./routers/employeeRouter");


app.use ("/", employeeRoutes);
app.listen (port, () => {
    console.log (`The server is working in port ${port}`)
});