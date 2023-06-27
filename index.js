const app = require("./app");
const connectWithDb = require("./config/db");
require("dotenv").config();
const cloudinary = require("cloudinary");

//connect with databases
connectWithDb();

//cloudinary config goes here
cloudinary.config({
  cloud_name: process.env.CLOUDINARRY_NAME,
  api_key: process.env.CLOUDINARRY_API_KEY,
  api_secret: process.env.CLOUDINARRY_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port: ${process.env.PORT}`);
});
