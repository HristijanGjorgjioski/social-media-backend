import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

import User from '../models/users-model.js';

const secret = "social-media";

export const register = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    try {
        const oldUser = await User.findOne({ email });

        if(oldUser) return res.status(400).json({ message: "E-mail already exsist" });

        const hashedPassword = bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
        console.log(error);
    }
};

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExsist = User.findOne({ email });

        if(!userExsist) return res.status(400).json({ message: "User does not exsist" });

        const isPasswordCorrect = bcrypt.compare(password, userExsist.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: userExsist.email, id: userExsist._id }, secret, { expiresIn: "1h" } );

        res.status(200).json({ result: userExsist, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!" });
        console.log(error);
    }
}
