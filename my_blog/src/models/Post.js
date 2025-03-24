const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, // User모델의 objectId를 userId로 그대로 사용하겠다
});

module.exports = mongoose.model('Post', postSchema);