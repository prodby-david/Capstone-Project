import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    vehicleName:{
        type:String,
        required:true
    }
});