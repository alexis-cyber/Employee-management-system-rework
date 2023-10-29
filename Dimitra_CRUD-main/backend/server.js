const express = require ("express");
const connection = require ("./connection");
const cors = require ("cors");
const user_routers = require("./routers/user_routers");
const employeeRoutes = require("./routers/employeeRouter");
const path = require("path");

const app = express();
const port = 8000;

//middleware 
app.use(express.json());
app.use(cors());
// app.use("/images", express.static(path.join(--__dirname, images)))

// Use the routers
app.use ("/", employeeRoutes);
app.use("/", user_routers);



app.listen (port, () => {
    console.log (`The server is working in port ${port}`)
});