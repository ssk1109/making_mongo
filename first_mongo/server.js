const mongoose = require('mongoose');
const express = require('express');
const app = express();

const uri = "mongodb+srv://khins1109:tjdrbdi708@cluster0.bpdnm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.listen(8080, ()=>{
  console.log('listening on 8080');
})

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB에 성공적으로 연결되었습니다!');
  })
  .catch((err) => {
    console.error('MongoDB 연결 실패:', err);
  });
