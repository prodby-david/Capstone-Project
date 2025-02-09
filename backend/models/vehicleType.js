import mongoose from 'mongoose';

const vehicleTypeSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    parkingRate: {
        type: Number, 
    }
});

const VehicleType = mongoose.model('Types', VehicleType);

export default VehicleType;