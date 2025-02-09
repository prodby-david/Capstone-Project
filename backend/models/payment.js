import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema({

    anount:{
        type: Number
    },
    paymentMethod:{
        type: String,
        enum: ['Gcash','Paymaya']
    },
    transactionDate:{
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', paymentSchema);


export default Payment;