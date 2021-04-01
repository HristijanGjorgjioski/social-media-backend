import express from 'express';
import { createPost, deletePost, getPosts } from '../controllers/posts-controller.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/getPosts', getPosts);
router.post('/createPost', createPost);
router.delete('/deletePost', deletePost);

export default router;
