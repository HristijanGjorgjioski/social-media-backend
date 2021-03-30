import Post from '../models/posts-model.js';

export const createPost = async (req, res) => {
    const { description, selectedFile, creator } = req.body;

    try {
        const result = await Post.create({ creator, description, photo: selectedFile });

        res.status(201).json({ result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
}
