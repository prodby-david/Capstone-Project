import mongoose from 'mongoose';

const parkingSlotSchema = mongoose.Schema({

    slotNumber:{
        type: Number,
        required: true,
        unique: true
    },
    location:{
        type: String,
        required: true,
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    reservation:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Reservation',
        required: true
    }], 
},  {
    timestamps: true
});

const ParkingSlot = mongoose.model('Slot', parkingSlotSchema);

export default ParkingSlot;