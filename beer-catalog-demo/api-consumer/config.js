/*
 * Sample config file for the Beer UI
 *
 * Usage: edit this file and save it as "config.js"
 */
define(function(require, exports, module) {
  module.exports = {
    // The base URL of the Beer API
    baseURL: "https://beer-catalog-mock-3scale-apicast-production.apps.cluster-telecom-4fc0.telecom-4fc0.example.opentlc.com:443
"

    // If a user-key is required, you can pass it as HTTP Header:
    additionalHeaders: { "user-key": "43778b9e692bd8626363f7ad88821391" },

    // Or in the Query String
    //extraQueryStringSuffix: "user_key=db0a8a7d3ca99b5df5aace2f61ac4e45"
  };
});
