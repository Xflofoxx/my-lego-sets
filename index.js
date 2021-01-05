const cluster = require("cluster");

if (cluster.isMaster) {

    // Start workers and listen for messages containing notifyRequest
    const numCPUs = require('os').cpus().length;
    console.log("Cluster master starting on pid " + process.pid + "! Starting " + numCPUs + " workers");

    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }


}
else {
    const server = require("./src/Server");

    const Server = new server();
    Server.init().then(() => {
        return Server.start();
    }).then(() => {
        console.log("Server listening on " + process.pid + "!");
    }).catch(err => {
        console.error("Error during server start for  " + process.pid + "!");
    })

}