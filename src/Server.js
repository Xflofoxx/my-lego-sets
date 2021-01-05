const express = require("express");

class Server {

    constructor(){
        this._app = express();
        this._routers = new Map();        
    }

    get app(){
        return this._app;
    }

    _getMiddleware() {
        
    }

    init() {
        this._app.use(this._getMiddleware());

        fs.readDir("./routers").then(files => {
            console.log("files", files);
        });
    }
}

module.exports = Server;