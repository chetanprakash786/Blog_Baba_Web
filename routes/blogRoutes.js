const express = require('express');
const Blog = require('../models/blog')
const router = express.Router();
const blogContollers = require('../controllers/blogControllers');

// router.get('/blogs', (req, res)=>{
//     //    res.sendFile('./views/index.html', {root : __dirname});
//       Blog.find().sort({createdAt : -1})
//         .then((result)=>{
//             res.render('blogs/index', {title : 'All Blogs', blogs : result})
//         })
//         .catch((err)=>console.log(err));
//     })
router.get('/blogs', blogContollers.blog_index);

// router.post('/blogs', (req, res)=>{
//     const blog = new Blog(req.body);
//     blog.save()
//         .then((result)=>{
//         res.redirect('/blogs');
//         })
//         .catch((err)=>{
//         console.log(err);
//         })
// })
router.post('/blogs', blogContollers.blog_create_post);

// router.get('/blogs/create', (req, res)=>{
//     res.render('blogs/create', {title : 'Create a new Blog'});
// });

router.get('/blogs/create', blogContollers.blog_create_get);

// router.get('/blogs/:id', (req, res)=>{
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result)=>{
//             res.render('blogs/details', {blog : result, title : 'Blog Details'});
//         })
//         .catch((err)=>{
//             res.status(404).render('404', {title : 'Blog not Found'});
//         })
// })

router.get('/blogs/:id', blogContollers.blog_details);

// router.delete('/blogs/:id', (req, res)=>{
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then((result)=>{
//             res.json({redirect : '/blogs'});
//         })
//         .catch(err => console.log(err));
// })
router.delete('/blogs/:id', blogContollers.blog_delete);


module.exports = router;
 