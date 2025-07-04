import { Reservation } from "../models/reservationSchema.js";


export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
   if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next({ "message": "Please provide all the necessary information" });
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, date, time});
        return res.status(201).json({"customer reservation" : firstName+lastName})
    } catch (err) {
        return res.status(404).json({ "message": "sudhar jaa bsdk" });
    }
}