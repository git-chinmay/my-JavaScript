/*Formidable Module
Its a very good module to upload the files to your server
Install it "npm install formidable"
*/

/*
STEP-1: Create a Node.js file that writes an HTML form,with an upload field:
Below code will produce an HTML form

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});

    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
}).listen(8080);*/

/*
STEP-2: Include the Formidable module to be able to parse the uploaded file 
once it reaches the server.

When the fil uplaoded and parsed,it gets placed on atemporary folder on your computer.

Below code will uplaod ,parse and place the filoe to a temp folder

var http= require('http');
var formidable = require('formidable');

http.createServer(function(req,res){
    if(req.url == '/fileupload'){
     var form = new formidable.IncomingForm();
     form.parse(req,function(err,fields,files){
        res.write("File uploaded");
        //res.write(files.filetoupload.path);
        //res.write(files.filetoupload.name);
        res.write("C:/Users/522817/Desktop/W3School/"+files.filetoupload.name);
        //C:Users*2817DesktopW3Schooldownload.log
        res.end();
     }); 
    }else{
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);*/

/*STEP-3: SAVE the File
When a file is successfully uploaded to the server,it is placed on a temporary folder.
The path to this directory can be found in the "files" object,passed as the 3rd argument 
in the parse() method's callback function.

To move the file to the folder of your choice,use the file system module, and rename the file.
Below code will move the file to current folder*/

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req,res){
    if(req.url=='/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            var oldpath = files.filetoupload.path;
            //var newpath = 'C:/Users/522817/Desktop/W3School/' + files.filetoupload.name;
            var newpath = 'C:/Users/522817/OneDrive - Cognizant/VScode/myGitHub/myJavaScript/JSWESchool/NODE JS/'+files.filetoupload.name;
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw err;
                }
                res.write("File uploaded and moved!");
                res.end();
            });
        });
    }else{

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end(); 
    }
}).listen(8080);





