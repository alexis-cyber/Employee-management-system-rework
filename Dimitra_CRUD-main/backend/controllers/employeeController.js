const express = require ("express");
const mongoose = require ("mongoose");
const Employee = require ("../models/employeeModel");

//get
const findEmployees = async (req, res) => {
    try {
        const allEmployees = await Employee.find();
        res.status(200).send(allEmployees);
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Internal server error" });
    }
};

//post
const addEmployee = async (req,res) => {
    try {
        let author = req.user.id;
        // console.log(author);
        let employee = req.body;
        // console.log(employee);
        const createdEmployee = await Employee.create(employee);
        res.status(200).send({ msg: "new employee is added", createdEmployee });
    } catch (error) {
        console.log(error); 
        res.status(500).send({ msg: "Internal server error. We failed to create the new employee." });
    }
};

//put
const  updateEmployee = async (req, res) => {
    try {
        let clientValue = req.body;
        let id = req.params.id;
        await Employee.updateOne ({ _id: id }, clientValue);
        res.status(200).send ({msg: "The employee updated successfully!"});
    } catch (error) {
        console.log (error);
        res.status(500).send({ msg: "Sorry, we failed to update the employee" });
    }
};

//delete
const deleteEmployee = async (req,res) => {
    try {
        await Employee.deleteOne({_id: req.params.id });
        res.status(200).send ({msg: "The employee is deleted successfully!"});
    } catch (error) {
        console.log (error);
        res.status(500).send({ msg: "Failed to delete the employee." }); 
    }
};

module.exports = { findEmployees, addEmployee, updateEmployee, deleteEmployee }
 
 
 
