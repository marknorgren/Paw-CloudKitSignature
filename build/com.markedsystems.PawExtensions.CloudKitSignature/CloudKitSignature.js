/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Extensions are implemented as JavaScript classes
	var https = __webpack_require__(3);
	var fs = __webpack_require__(4);
	var crypto = __webpack_require__(1);

	var CloudKitSignature = function CloudKitSignature() {

	  // implement the evaluate() method to generate the dynamic value
	  this.evaluate = function (context) {
	    var dateString = new Date().toISOString().replace(/\.[0-9]+?Z/, "Z");

	    var dynamicValue = "mark"; // generate some dynamic value
	    return dynamicValue;
	  };
	};

	CloudKitSignature.inputs = [InputField("secret key", "SecretKey", "SecureValue")];

	// set the Extension Identifier (must be same as the directory name)
	CloudKitSignature.identifier = "com.markedsystems.PawExtensions.CloudKitSignature";

	// give a display name to your Dynamic Value
	CloudKitSignature.title = "CloudKit Signature";

	// link to the Dynamic Value documentation
	CloudKitSignature.help = "https://github.com/mrkd/paw-extension-cloudkitsignature";

	// call to register function is required
	registerDynamicValueClass(CloudKitSignature);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("https");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ }
/******/ ]);