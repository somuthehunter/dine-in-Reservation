import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "resturant",
    }).then(() => {
        console.log("Database connected");
    }).catch(err => (console.log(err)));
}