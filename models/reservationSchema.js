import mongoose from "mongoose";
import validator from "validator";


const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name should contain atleast 3 characters."],
        maxLength: [30, "First name should contain atleast 3 characters."],
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        validate: [validator.isEmail, "Provide valid Email."]
    },
    phone: {
        type: String,
        maxLength: [11, "Phone number must contain 10 digits"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});


export const Reservation = mongoose.model("reservation", reservationSchema);