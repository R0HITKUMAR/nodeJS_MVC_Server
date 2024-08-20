import mongoose from "mongoose";
import config from '../config/config.js';
import common from '../utils/common.js';

const uri = config.MONGO_URL;

mongoose.connect(uri);

const connectDB = mongoose.connection;

connectDB.on("error", (err) => {
    console.log(err, 'error');
    process.exit(1);
}
);

connectDB.once("open", () => {
    console.log("Database Connected Successfully")
});

export default connectDB;