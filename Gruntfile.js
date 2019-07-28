"use strict";
module.exports = function(grunt) {
  require("time-grunt")(grunt);
  require("time-grunt")(grunt);
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "css/styles.css": "css/style.scss"
        }
      }
    }
  });
  grunt.registerTask("css", ["sass"]);
};
