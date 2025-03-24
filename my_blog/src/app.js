const express = require('express');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();

connectDB();

// routes안에 있는 라우트 설정을 불러옴
const authRoutes = require('./models/User.js');
const postRoutes = require('./models/Post.js');

// 실제 HTTP요청이 들어왔을 때 사용할 routes와 연결
app.use('/api/auth', authRoutes);
app.use('/api.pose', postRoutes);


// 미들웨어 설정
app.use(express.json());

// 다른 파일에서 express에 접근할 수 있도록 exports합시다!
module.exports = app;