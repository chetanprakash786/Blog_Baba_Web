const express = require('express');
const morgan = require('morgan');
const Blog = require('./models/blog');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


const app = express();

const dbURI = 'mongodb+srv://test_user:test_user_1234@node-tuts.hpwayth.mongodb.net/?retryWrites=true&w=majority&appName=node-tuts'
mongoose.connect(dbURI)
  .then((result)=>{
     console.log('connected to db');
     app.listen(3000);
  })
  .catch((err)=>{
    console.log(err);
  })

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res)=>{
    res.render('about', {title : 'About'});
})

//blogRoutes
app.use(blogRoutes);  //  we can use this also

//blog Route
// app.get('/blogs', (req, res)=>{
//     //    res.sendFile('./views/index.html', {root : __dirname});
//       Blog.find().sort({createdAt : -1})
//         .then((result)=>{
//             res.render('blogs/index', {title : 'All Blogs', blogs : result})
//         })
//         .catch((err)=>console.log(err));
//     })

// app.post('/blogs', (req, res)=>{
//     const blog = new Blog(req.body);
//     blog.save()
//         .then((result)=>{
//         res.redirect('/blogs');
//         })
//         .catch((err)=>{
//         console.log(err);
//         })
// })

// app.get('/blogs/create', (req, res)=>{
//     res.render('blogs/create', {title : 'Create a new Blog'});
// });

// app.get('/blogs/:id', (req, res)=>{
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result)=>{
//             res.render('blogs/details', {blog : result, title : 'Blog Details'});
//         })
//         .catch((err)=>{
//             res.status(404).render('404', {title : 'Blog not Found'});
//         })
// })

// app.delete('/blogs/:id', (req, res)=>{
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then((result)=>{
//             res.json({redirect : '/blogs'});
//         })
//         .catch(err => console.log(err));
// })

app.use((req, res)=>{
    res.status(404).render('404', {title : '404'});
 })