const express = require('express');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();

connectDB();

// routes안에 있는 라우트 설정을 불러옴
const authRoutes = require('./routes/auth.js');
const postRoutes = require('./routes/post');

// 실제 HTTP요청이 들어왔을 때 사용할 routes와 연결
app.use('/api/auth', authRoutes);
app.use('/api.pose', postRoutes);