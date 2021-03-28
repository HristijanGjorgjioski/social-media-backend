import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/user-routes.js'

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://social-media:12345@cluster0.u2uu1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use("/user", userRoutes);

mongoose.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    }
)
