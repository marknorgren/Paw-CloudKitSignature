// Extensions are implemented as JavaScript classes
const https = require('https');
    var fs = require('fs');
    var crypto = require('crypto');

var CloudKitSignature = function() {


  // implement the evaluate() method to generate the dynamic value
  this.evaluate = function(context) {
  	var dateString = new Date().toISOString().replace(/\.[0-9]+?Z/, "Z")

    var dynamicValue = "mark"; // generate some dynamic value
    return dynamicValue;
  }
}

CloudKitSignature.inputs = [
    InputField("secret key", "SecretKey", "SecureValue"),
];

// set the Extension Identifier (must be same as the directory name)
CloudKitSignature.identifier = "com.markedsystems.PawExtensions.CloudKitSignature";

// give a display name to your Dynamic Value
CloudKitSignature.title = "CloudKit Signature";

// link to the Dynamic Value documentation
CloudKitSignature.help = "https://github.com/mrkd/paw-extension-cloudkitsignature";

// call to register function is required
registerDynamicValueClass(CloudKitSignature)