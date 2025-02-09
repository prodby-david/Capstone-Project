import mongoose from 'mongoose';


const DBConnection = async (req,res) => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection success');
    }catch(err){
        console.error('Error connecting database.', err);
        process.exit(1);
    }
}

export default DBConnection;