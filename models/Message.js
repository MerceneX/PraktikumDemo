const mongose = require("mongoose"),
	Schema = mongose.Schema;

//Create Schema
const MessageSchema = new Schema({
	msg: {
		type: String,
		required: true
	}
});

module.exports = Message = mongose.model("message", MessageSchema);
