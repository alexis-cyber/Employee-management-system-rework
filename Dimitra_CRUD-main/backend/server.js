const express = require ("express");
const app = express();
const connection = require ("./connection");
const cors = require ("cors");
const port = 8000;

//middleware
app.use(express.json());
app.use(cors());

const employeeRoutes = require("./routers/employeeRouter");


app.use ("/", employeeRoutes);
app.listen (port, () => {
    console.log (`The server is working in port ${port}`)
});