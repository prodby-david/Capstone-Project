import mongoose from 'mongoose';


const reservationSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    vehicle:{
        type: mongoose.Schema.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    parkingSlotNumber:{
        type: mongoose.Schema.ObjectId,
        ref: 'Slots',
        required: true,
        startTime: { type: Date },
        endTime: { type: Date },
        status: { 
            type: String, 
            enum: ['reserved', 'canceled', 'completed'], 
            default: 'reserved' 
        }
    }
}, { _id: false });

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;