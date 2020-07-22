var fs = require("fs");

console.log("Begin reading File");
fs.readFile("input.txt",(err,data)=>{
	if (err) console.log(err)
		console.log(data.toString());
	console.log("End reading File");
	console.log("Appending something");
	fs.appendFile("input.txt","I am appending something", (err)=>{
		if (err) console.log(err);
		console.log("Successfully appending something")
		console.log("Begin re-reading File")
		fs.readFile("input.txt", (err,data)=>{
			if (err) console.log(err);
			console.log(data.toString())
			console.log("Finish re-reading File")
		})
	})
})