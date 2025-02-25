import mongoose from "mongoose";
type mongoDBRequirement = { useNewUrlParser: true, useUnifiedTopology: true }
const db: mongoDBRequirement = { useNewUrlParser: true, useUnifiedTopology: true };
let isConnected: boolean = false;


const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('Already Connected to mongoDB :)');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI!,);
        console.log('Succesfully Connected to mongoDB :)');
        isConnected = true;
    } catch (err: any) {
        console.error(`Error Message: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB; 