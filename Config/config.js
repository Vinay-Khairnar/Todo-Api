require('dotenv').config();
const config={
    MONGO_URL:process.env.MONGO_URL,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    PORT:process.env.PORT,
}
module.exports=config;