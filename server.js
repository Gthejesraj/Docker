const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/database");
const cookieJwtAuth = require("./middlewares/cookieJwtAuth"); //auth middleware

const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const dataRoutes = require("./routes/dataRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { default: mongoose } = require("mongoose");

const app = express();
const PORT = process.env.PORT;

//Data base connection
mongoose.set("strictQuery",false)
mongoose.connect(process.env.MONGO_URI).then(
  console.log('Data base Connected')
).catch(err => console.log(err))

//Middlewares
app.use(cors({
  origin: ["*"],
  credentials:true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin", "Access-Control-Request-Method", "Access-Control-Request-Headers", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials", "Access-Control-Allow-Methods", "Access-Control-Allow-Headers", "X-Access-Token"]
}));
 
//Frontend folder
app.use(express.static('static/build'))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//routes
app.use("/api/user", userRoutes);
app.use("/api/payment",cookieJwtAuth, paymentRoutes);
app.use("/api/data", dataRoutes);
app.use("/api/admin", adminRoutes);

//Wildcard route
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'static/dist/index.html'));
})

//Backend port
app.listen(1337,()=>{
    console.log(`server is listening at http://127.0.0.1:1337`)
})
