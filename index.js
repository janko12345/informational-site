const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html")
    if (req.url === "/" || req.url === "/about" || req.url === "/contact-me") {
        const url = req.url == "/" ? "/index" : req.url;
        res.statusCode = 200;
        fs.readFile(`./static${url}.html`, (err, data) => {
            if (err) console.log(err);
            res.end(data);
        })
    }
    else {
        res.statusCode = 404;
        fs.readFile("./static/404.html", (err, data) => {
            res.end(data);
        })
    }
});

server.listen(8080, () => {
    console.log("server is listening");
});