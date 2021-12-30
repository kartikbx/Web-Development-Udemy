// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //establishing connection
    await mongoose.connect('mongodb://localhost:27017/Students'); //note here we create the database in the connection itself by specifying name
    console.log("connection successful");
    
}

//we build a schema which defines the blue print/structure of the document in mongoose
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [1, "please spcify name of student"]
    },
    rollno: Number,
    address: String 
});

/*
    - we create a model which we can use to specify documents based on our schema
    - here we give two parameters to model function
    1] collection name in string in singular form and it will automatically be pluralized in mongoshell
    2] schema specified earlier
*/
const Student = mongoose.model("Student", StudentSchema);// "Student" => collection name, makes it if not present..StudentSchema=> schema

//-----------INSERTING A SINGLE DOCUMENT------------------
//we create the the student document 
const s1 = new Student({
    name:"Anshul",
    rollno: 1,
    address: "sukhsahar nagar"
});

// s1.save();// this saves the document in mongodb

//------------INSERTING MULTIPLE DOCUMENTS-----------------

const s2 = new Student({
    name: "aditya",
    rollno: 2,
    address: "baker street"
});

const s3 = new Student({
    name: "Bhavesh",
    rollno: 3,
    address: "gangadham society"
});

const s4 = new Student({
    name: "Chetan",
    rollno: 4,
    address: "shani mandir" 
});

//insertMany of model takes an array of js objects and function to do about errors 
/*
Student.insertMany([s2,s3,s4], function(err) { 
    if(err)
        console.log(err);
    else
        console.log("saved successful");
});
*/


//----------------Reading from mongodb and log into console--------------------
Student.find(function(err, res){
    if(err){
        console.log(err);
    }
    else{
        
        res.forEach(element => {
            console.log(element.name);        
        }); 
        
    }
});


//-----------------UPDATE OPERATION----------------------------------
Student.updateOne({name:"Bhavesh"}, {address: "abc street"}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully updated");
    }
});

//---------------DELETE OPERATION----------------------------------
Student.deleteOne({rollno: {$gt : 3}}, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully deleted entry");
    }
});


//close connection
setTimeout(function() { mongoose.connection.close();}, 100);

