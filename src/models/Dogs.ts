import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  image: String
})

export default mongoose.model('Dog', dogSchema);