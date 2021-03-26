// const express = require('express') //variable created with the loaded express lib
// const app = express() //store express function inside app variable
// const port = 3100  //use port 3001 to 3100

// method = function
//req = request
//res = response

// /(single slash) = base url

// app.get('/', (req, res) => res.send('Welcome to Node.js!!!!'));

// app.get('/mypage',(req,res) => res.send('This is Second Page'));

// app.get('/about',(req,res) => res.send('This is About us Page'));

//listen : to run node js program
//console.log : to print statement inside terminal

// app.listen(port, () => console.log(`Example app listening at http://localhost:3100,this is pratiksha shinde program`))


const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = 3100
mongoose.connect('mongodb+srv://pratikshashinde:Pratiksha@2144@cluster0.lbsm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))
