const mongoose = require('mongoose')
const Table = require('./models/TableModal')



const tables = [   
    new Table(
        {no:104,status:'free'},
        {no:101,status:'free'},
        {no:102,status:'free'},
        {no:103,status:'free'},
        {no:104,status:'free'},
        {no:105,status:'free'},
        ),];

        const connectDatabase=()=>{
            mongoose.connect("mongodb://localhost:27017/FoodDine",{useNewUrlParser:true,useUnifiedTopology:true
            }).then((data)=>{
                console.log(`Mongodb connected with server: ${data.connection.host}`);
            }).catch(err => {
                console.log(err.stack);
                process.exit(1);
              })
        }
        connectDatabase();
        Table.deleteMany(tables)
        

