const mongoose = require ("mongoose");

//schema
const employeeSchema = new mongoose.Schema ({
    serialNo:Number,
    name: String,
    phone: Number,
    status: { type: Boolean, default: false },
    department: {
        name: String,
        acronym: String,
    },
    address: String,
    author:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
});

//model 
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;