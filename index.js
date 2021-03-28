import express from 'express';
import mongoose from 'mongoose';

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://social-media:12345@cluster0.u2uu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const app = express();

mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    }
)
