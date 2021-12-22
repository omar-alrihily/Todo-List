const mongoose=require("mongoose");

const dbURI='mongodb://localhost:27017/TodoListV01';

mongoose.connect(dbURI)


const db= mongoose.connection;


db.on("error", (err)=>{
    console.log(err.message + "mongo not running");

});
db.on("connected",(err)=>{
    console.log("MongoDB Is Conected ...");
});