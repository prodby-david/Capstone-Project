import mongoose from "mongoose";

const userSchema =  mongoose.Schema({

    lastname:{
        type: String,
        required: true,
        trim: true
    },
    firstname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true
    },
    vehicles:[{
       type: mongoose.Schema.ObjectId, 
       ref: 'Vehicle', 
       required: true
    }],
    paymentHistory:{
        type: mongoose.Schema.ObjectId,
        ref: 'Payment',
        required: true
    }

});

const User = mongoose.model('User', userSchema);

export default User;