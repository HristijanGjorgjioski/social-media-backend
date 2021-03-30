import mongoose from 'mongoose';

const postModel = mongoose.Schema({
    creator: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true }
});

export default mongoose.model("Post", postModel);
