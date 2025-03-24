const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// user에 대한 Schema 설정
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

// 보안을 위한 설정! 
// mongoose의 save함수를 사용하기 전 실행될 미들웨어 비슷한 느낌!
userSchema.pre('save', async function(next){ // userSchema형식의 데이터가 'save'되기 직전 실행되는 async funktion 설정
    if(!isModified(this.password)) next(); // 만약 password가 바뀌지 않았다면 넘어가~
    const salt = await bcrypt.genSalt(10); // salt: 암호화 하는 값에 추가하는 랜덤 덱스트
    this.password = await bcrypt.hash(this.password, salt); // pw를 salt와 해싱하여 pw에 덮어씀
})

module.exports = mongoose.Model('User', userSchema); // mongoDB에 userSchema형식을 따르는 users라는 컬렉션 생성(컬렉션이 저장될 때는 자동으로 소문자+복수형으로 저장됨)