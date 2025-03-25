// Q. server.js에서는 require로 app을 가져왔으면서 auth.js에서는 왜 const express = require('express');로 express를 호출하는가? 오류가 생기지 않을까?
// A. 오류 안생김. require('express')는 express를 불러오는 것일 뿐 새로운 인스턴스를 만드는 것은 아님.
const express = require('express');

const {registerUser, loginUser} = require('../controllers/authController');

// 라우트 핸들러 생성
// 라우터 왜 사용?
// 우리가 흔히 app.get, app.post 등으로 적는 것이 라우터 부분임. 만약 라우터를 따로 설정하지 않는다면 app.js에 app.get()이 도배되어 코드가 굉장히 길어질 것임. 
// 따라서 라우팅을 담당하는 부분만 따로 분리하는 것. client가 'localhost/api/auth/register'로 호출하면 app.js의 app.use('/api/auth', registerRoutes);에 의해 자동으로 registerUser가 실행될 것임.
// 즉, client의 url호출을 나누어 담당하는 부분을 분리시키는 것이 라우터의 역할!
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;


