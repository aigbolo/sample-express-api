var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/greeting", (req, res) => {
    res.send("Hello YOU!");
});

app.get("/greeting/:name", (req, res) => {
    var chatText = ''
    if (req.query.you) {
        chatText = `I am ${req.params.name}. Nice too meet you, ${req.query.you}!`
    } else {
        chatText = `I am ${req.params.name}. Nice too meet you.`
    }


    res.send(chatText);
});
