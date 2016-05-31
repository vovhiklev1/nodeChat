var http = require('http');
var fs = require('fs');
global.fs = fs;
var url = require('url');
global.url = url;
var path = require('path');
global.path = path;
var eventEmiter = require('events').EventEmitter;
global.eventEmiter = eventEmiter;
var events = new eventEmiter();
global.events = events;
var util = require('util');
global.util = util;
var readDir = require('./myNodeModules/readDir.js');
var readPath = require('./myNodeModules/readPath.js');
var writeLog = require('./myNodeModules/writeLog.js');
global.writeLog = writeLog;
var watchFile = require('./myNodeModules/watchFile.js');
var server = require('./myNodeModules/server.js');
global.net = require('net');
var netSocket = require('./myNodeModules/netSocket.js');
var https = require('https');
var ssl = require('./myNodeModules/ssl.js');
var ws = require('ws');
var webSocket = require('./myNodeModules/webSocket.js');
var socketIO  =require('./myNodeModules/socketIO.js');
var io = require('socket.io');



events.on('ON_EMIT', function (data) {
	//console.log('ON_EMIT' + data)
});


var modules = [];
modules['fs'] = fs;
modules['path'] = path;
modules['http'] = http;
modules['https'] = https;
modules['ws'] = ws;
modules['io'] = io;



//server.fileModule(modules);

//readDir.fileModule(modules).getDirList();
//readPath.fileModule(modules).getPath();
//writeLog.fileModule(modules).writeLog('start server ...');
//watchFile.fileModule(modules).watchFile();
//netSocket.fileModule(modules).netSocket();
//ssl.fileModule(modules).ssl();
//webSocket.fileModule(modules).webSocket();
socketIO.fileModule(modules).socketIO();
