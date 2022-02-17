const EventEmitter = require("events");
const http = require("http");

// const myEmmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  console.log(req.url);
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
  console.log("Another Request");
});

server.on("close", (req, res) => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests");
});
