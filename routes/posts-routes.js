import express from 'express';
import { createPost, getPosts } from '../controllers/posts-controller.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/', getPosts);
router.post('/createPost', createPost);

export default router;
