const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));

app.get('/',(req,res) => res.send('API Running..'));

//Define Routers 
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));


const PORT = process.env.PORT || 5000;
//server check devlopment project.
app.listen(PORT, ()=> console.log(`server started on ${PORT}`));
