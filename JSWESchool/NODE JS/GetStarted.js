/*
//Simple Hello World print
var http = require('http');
//var uc = require('upper-case');

http.createServer((req,res)=>{

    
    res.writeHead(200,{'Content-type':'text/html'});
    //res.write(uc('Hello World'));
    res.write('Running from NODE.');
    res.end();
}).listen(8080);
*/


/*
//Creating your own module and import export
var http = require('http');
var datetime = require('./DateTime')
http.createServer((req,res)=>{

    
    res.writeHead(200,{'Content-type':'text/html'});
    //res.write('Hello World');
    //res.write('Running from NODE.');
    res.write(datetime.mydt());
    res.end();

}).listen(8080);*/

/*
//req argument url property
//This object has a property called "url" which holds the part of the url that comes after the domain name:

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write(req.url);
    res.end();
}).listen(8080);

//try opening the server localhost://8080/winter see the output
*/

/*
//Node.js as a File Server: Reading file
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('Node_introduction.txt',function(err,data){
        res.writeHead(200,{'Content-type':'text'})
        res.write(data);
        res.end();   
    });
    
}).listen(8080);*/

//Creating file
//fs.appendfile():- will add content to file ,create a new file if not already exist
//fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
//fs.open():- method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

/*
var fs = require("fs");
fs.appendFile('myNewFile1.txt','Adding new content to file.',function(err){
    if(err){ throw err}
    else {console.log('File created and saved.')}
});*/

/*
var fs = require("fs");
fs.writeFile('myNewFile2.txt','Hello COntent from writefile', //it will overwrite eachtime
        function(err){
            if(err){throw err}
            else {console.log("File created and saved.")}
        })

//Renaming file
var fs = require("fs");
fs.rename('myNewFile2.txt','renamed.txt',function(err){
    if(err){throw err}
    console.log("File Renamed successfully.")
});

setTimeout()

//Deleting file
var fs = require("fs");
fs.unlink('renamed.txt',function(err){
    if(err){throw err}
    console.log("File Deleted successfully.")
});*/

/*
//NODE js URL module
//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties.

var url = require('url');
var adr = "https://www.w3schools.com/nodejs/nodejs_url.asp";
var q = url.parse(adr);
console.log(q);
console.log("Host",q.host);
console.log("Hostname",q.hostname);
console.log("Pathname",q.pathname);
console.log("Query",q.query);*/

//Using NPM package
//1-Install the package npm install <package name>
//(It will create a folder node_modules and will install packages inside it)


//NODE.js Events
//every action in a computer is an event and Node objects can fire events 
/*
var fs = require("fs");
var readstream = fs.createReadStream('./Node_introduction.txt');
//Write to the console when the file is opened:
readstream.on("open",function(){
    console.log("Someone opened the file.")
})
readstream.on("close",function(){
    console.log("File is closed.")
})*/


/*
//Event Emitter object
//To fire an event use the emit() method

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Creating an event handler
var myEventHandler = function(){
    console.log('I hear a scream!');
}

var myEventHandler2 = function(){
    console.log('I hear a laugh!');
}

//Assign an event handler to an event called scream
eventEmitter.on('scream',myEventHandler);
eventEmitter.on('laugh',myEventHandler2);

//Firirng the scream event
eventEmitter.emit('scream',myEventHandler2);*/

//Sending email from your Node server
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nayak.chinmay06@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'nayak.chinmay06@gmail.com',
  to: 'nayak.chinmay07@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});







