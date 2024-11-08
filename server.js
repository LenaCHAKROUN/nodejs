const http = require("http");

http.createServer((request,Response)=> {
    Response.end("Hello Node !!!!")
})
.listen("3000");