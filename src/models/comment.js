const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const CommentSchema = new Schema({
    image_id: { type: ObjectId },
    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timestamp: {type: Date, default: Date.now }
});

CommentSchema.virtual('image')
    .set(function (image){
        this._image = image;
    })
    .get(function () {
        return this._image;
    })

module.exports = model('Comment', CommentSchema);