import mongoose from 'mongoose';

// Connecting to mongoDB
export const mongooseConnection = async (): Promise<void> => {
  await mongoose.connect('mongodb://localhost:27017/expdb', {useNewUrlParser: true, useUnifiedTopology: true});
  console.log(`Connected to MongoDB!`)
}