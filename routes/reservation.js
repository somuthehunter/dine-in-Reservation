import express from 'express';
import { sendReservation } from '../controller/reservation.js';

const router = express.Router();


router.get("/resturant", async (req, res) => {
    res.status(200).json({"Message" : "Everything is okay!!!"})
});

router.post("/send" , sendReservation)
export default router;