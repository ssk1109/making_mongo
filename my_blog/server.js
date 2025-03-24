// const express = require('express');
// const app = express();
// 위처럼 새로운 express를 설정해버리면 서버가 중복으로 실행될 뿐더러 app.js에서 설정한 routes, middleware를 사용하지 못해요! ohno~

// express서버는 아래처럼 불러옵시다.
const app = require('./src/app');

// app.js에서 이미 env를 config했기 때문에 다시 'require('dotenv').config();'할 필요 없어요
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`listening on ${port}!`);
});