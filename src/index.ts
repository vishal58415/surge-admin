require('dotenv').config({ path: __dirname + '/.env' })
console.log("path:", __dirname);
require("newrelic");
import app from "./app";
import Environment from "./config/global";     // taking constant from Environment Class , Here all constants are defined
import http from "http";

const PORT = Environment.portNumber;

console.log(" PORT " + PORT);

app.set("port", PORT);
const server = http.createServer(app);

/**
* Event listener for HTTP server "error" event.
*/

function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof (PORT) === "string" ? "Pipe " + PORT : "PORT " + PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
* Event listener for HTTP server "listening" event.
*/

function onListening() {
  const addr: any = "localhost";//server.address();
  const bind = typeof (addr) === "string" ? "pipe " + addr : "port " + addr.port;
  // debug("Listening on " + bind);
}

const startServer = (async () => {   // initialize all servers
  try {
    //   createServer();       // initialize express server
    server.listen(PORT);
    server.on("error", onError);
    server.on("listening", onListening);
    console.log(`Server is running on port ${PORT}`);

  } catch (err) {
    console.log(err);
    return;
  }
});

startServer();


