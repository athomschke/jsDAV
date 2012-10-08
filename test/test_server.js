/*
 * @package jsDAV
 * @subpackage DAV
 * @copyright Copyright(c) 2011 Ajax.org B.V. <info AT ajax.org>
 * @author Mike de Boer <info AT mikedeboer DOT nl>
 * @license http://github.com/mikedeboer/jsDAV/blob/master/LICENSE MIT License
 */
"use strict";

var jsDAV = require("./../lib/jsdav"),
    jsDAV_Locks_Backend_FS = require("./../lib/DAV/plugins/locks/fs");

jsDAV.debugMode = true;

var server = jsDAV.createServer({
    node: __dirname + "/assets",
    locksBackend: new jsDAV_Locks_Backend_FS(__dirname + "/assets"),
    baseUri: '/'
}, 8000);

console.info("Base uri: " + server.getBaseUri());

server.setBaseUri('');

console.info("Base uri: " + server.getBaseUri());
