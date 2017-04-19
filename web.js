var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res){
    res.send('Hi');
});

var port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log("Listing on port :"+port);
});
