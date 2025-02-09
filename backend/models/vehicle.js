import mongoose from 'mongoose';


const vehicleSchema = mongoose.Schema({

    owner:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    plateNumber:{
        type:String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    color:{
        type: String
    },
    type:{
        type: mongoose.Schema.ObjectId,
        ref: 'VehicleType',
        required: true
    }
  
}, {
    timestamps: true
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;