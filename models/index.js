'use strict';

var fs = require('fs');
var path = require('path');
var sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV ||  'development';
var config = require(__dirname + ‘/../config/config.js’)[env];
var db = {};

if (config.use_env_variable) {
    var sequelize= new Sequelize(process.env[config.use_env_variable]),
} else {
    var sequelize= new Sequelize(config.database, config.username,config.password, config);
}