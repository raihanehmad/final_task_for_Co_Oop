const mongoose = require('mongoose');
// const {Schema} = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	id: {type: String},
    name: {type: String},
    salary: {type: String},
    age: {type: String},
    image: {type:String},
});

module.exports = mongoose.model('User', UserSchema);