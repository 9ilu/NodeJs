const http = require("http");

const port = 8085;

// http methods
// >> GET:Inorder to get data from the server
// >>POST:Sending data to server
// >>DELETE:Deleting data from database
// >>PATCH:updating certain fields
// >>PUT:full update

const todolist = ["learn", "apply things", "succed"];


http
    .createServer((req, res) => {
        const { method, url } = req;
        // 
        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200);
                res.write(todolist.toString());

            } else if (method === "POST") {
                let body = "";
                req
                    .on('error', (err) => {
                        console.log(err);
                    }).on('data', (chunk) => {
                        body += chunk;
                        console.log(chunk);
                    }).on('end', () => {
                        body = JSON.parse(body);

                        let newToDo = todolist;
                        newToDo.push(body.item);
                        console.log(newToDo);
                        // console.log("data:", body);
                    });
            } else if (method === "DELETE") {
                let body = "";
                req.on("error", (err) => {
                        console.error(err);
                    }).on("data", (chunk) => {
                        body += chunk;
                    })
                    .on("end", () => {
                        body = JSON.parse(body);
                        let deleteThisItem = body.item;
                        for (let i = 0; i < todolist.length; i++) {
                            if (todolist[i] === deleteThisItem) {
                                todolist.splice(i, 1);
                                break;
                            } else {
                                console.error("Error:Match not found!");
                                break;;
                            }
                        }
                        // todolist.find((elem, index) => {
                        //     if (elem === deleteThisItem) {
                        //         todolist.splice(index, 1);
                        //     } else {
                        //         console.error("Error: Match Not Found");
                        //         console.exit();
                        //     }
                        // });
                    });
            } else {
                res.writeHead(501);
            }

        } else {
            res.writeHead(404);
        }
        res.end();
        //     res.writeHead(200, { "Content-Type": "test/html" });
        //     res.write("<h2> Hey server started : </h2>");
        //     res.end();
    })
    .listen(port, () => {
        console.log(`NodeJs Server started Running on Port ${port}`);
    });
// css tricks.com
//javascript.info