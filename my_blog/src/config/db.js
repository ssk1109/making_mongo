const mongoose = require('mongoose');

require('dotenv').config(); // .env에 있는 db uri 가져오기

// mongoDB 연결하는 '함수' ->  재사용성, 코드 유지보수성 up
const connectDB = async () => { // db연결시간이 길어질 수도 있어 비동기로 실행
    try{
        await mongoose.connect(process.env.DB_URI);
        // mongoose.connect(uri주소);
        // 'process.env.환경변수명'으로 .env에 있는 원하는 환경변수 사용가능
        console.log('몽고연결!')
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
// 다른 파일에서 사용하기 위해 exports
module.exports = connectDB;