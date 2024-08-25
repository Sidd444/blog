// const Post = require('../models/Post');

// // Get all posts
// exports.getPosts = async (req, res) => {
//     try {
//         const posts = await Post.find().populate('author', 'name');
//         res.json(posts);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching posts', error: err });
//     }
// };

// // Get a specific post
// exports.getPostById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const post = await Post.findById(id).populate('author', 'name');
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         res.json(post);
//     } catch (err) {
//         res.status(500).json({ message: 'Error fetching post', error: err });
//     }
// };

// // Create a new post
// exports.createPost = async (req, res) => {
//     const { title, content, excerpt } = req.body;
//     try {
//         const post = new Post({
//             title,
//             content,
//             excerpt,
//             author: req.user.id
//         });
//         await post.save();
//         res.status(201).json(post);
//     } catch (err) {
//         res.status(500).json({ message: 'Error creating post', error: err });
//     }
// };

// // Update a post
// exports.updatePost = async (req, res) => {
//     const { id } = req.params;
//     const { title, content, excerpt } = req.body;
//     try {
//         const post = await Post.findByIdAndUpdate(id, { title, content, excerpt }, { new: true });
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         res.json(post);
//     } catch (err) {
//         res.status(500).json({ message: 'Error updating post', error: err });
//     }
// };

// // Delete a post
// exports.deletePost = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const post = await Post.findByIdAndDelete(id);
//         if (!post) {
//             return res.status(404).json({ message: 'Post not found' });
//         }
//         res.json({ message: 'Post deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Error deleting post', error: err });
//     }
// };
