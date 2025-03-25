// const express = require('express');
// const app = express();
// 위처럼 새로운 express를 설정해버리면 서버가 중복으로 실행될 뿐더러 app.js에서 설정한 routes, middleware를 사용하지 못해요! ohno~
// 25.03.25 추가 설명
// 이미 우리는 app.js에서 app이라는 express 애플리케이션을 생성했고 해당 서버에 라우터, 미들웨어 설정을 해놓은 상태임. server.js에서는 app.js의 app을 가져와 서버를 실행한 것임.
// 만약 새로운 appp을 만들었다면 아무것도 설정되어있지 않은 빈 깡통으로 서버를 여는 격.

// express서버는 아래처럼 불러옵시다.
const app = require('./src/app');

// app.js에서 이미 env를 config했기 때문에 다시 'require('dotenv').config();'할 필요 없어요
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`listening on ${port}!`);
});