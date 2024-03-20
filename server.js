const http = require("http");

const port = 8085;

http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "test/html" });
        res.write("<h2> Hey server started : </h2>");
        res.end();
    })
    .listen(port, () => {
        console.log(`NodeJs Server started Running on Port ${port}`);
    });
// css tricks.com
//javascript.info