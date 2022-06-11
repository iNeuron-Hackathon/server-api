const mongoose = require("mongoose")

const connectDatabase=()=>{
    mongoose.connect("mongodb://localhost:27017/FoodDine",{useNewUrlParser:true,useUnifiedTopology:true
    }).then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
}

module.exports=connectDatabase;