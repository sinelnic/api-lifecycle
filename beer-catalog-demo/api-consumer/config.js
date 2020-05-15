/*
 * Sample config file for the Beer UI
 *
 * Usage: edit this file and save it as "config.js"
 */
define(function(require, exports, module) {
  module.exports = {
    // The base URL of the Beer API
    baseURL: "https://beer-catalog-mock-spec-3scale-apicast-production.apps.cluster-telecom-4fc0.telecom-4fc0.example.opentlc.com",

    // If a user-key is required, you can pass it as HTTP Header:
    additionalHeaders: { "api-key": "ec4075f2dc95d0b7e4a1ec968dcf8342" }

    // Or in the Query String
    //extraQueryStringSuffix: "user_key=db0a8a7d3ca99b5df5aace2f61ac4e45"
  };
});
