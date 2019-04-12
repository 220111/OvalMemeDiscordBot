var http = require('http');
var alive = aliveset
var aliveset = getRndInteger(1,2)

http.createServer(function (req, res) {
  res.write("Oval Of Obsidian's Discord Meme Bot");
  res.write(" Is currently:")
  if (alive == 1){
    res.write(" Alive And Well!");
    
  }
  else{
    res.write("")
  }
  
}).listen(8080);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
