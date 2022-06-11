const mongoose = require('mongoose')
const Table = require('./models/TableModal')



const tables = [   
    new Table(
        {no:104},
        {no:101},
        {no:102},
        {no:103},
        {no:104},
        {no:105},
        ),];

        const connectDatabase=()=>{
            mongoose.connect("mongodb://localhost:27017/FoodDine",{useNewUrlParser:true,useUnifiedTopology:true
            }).then((data)=>{
                console.log(`Mongodb connected with server: ${data.connection.host}`);
            }).catch(err => {
                console.log(err.stack);
                process.exit(1);
              })

            Table.insertMany(tables);
            
        }
        connectDatabase();

