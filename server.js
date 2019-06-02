const express = require("express"),
	app = express(),
	helloRoutes = require("./routes/helloRoute.js"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	Message = require("./models/Message.js");

app.use(bodyParser.json());
app.use("/hello", helloRoutes);

mongoose
	.connect("mongodb://localhost:27017/PraktikumDemo", { useNewUrlParser: true })
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/", (req, res) => {
	const mesg = new Message({
		msg: req.body.msg
	});
	mesg
		.save()
		.then(item => res.send(req.body.msg))
		.catch(err => console.log(err));
});

app.listen(5000, () => console.log(`Server started on port 5000`));
