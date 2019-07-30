"use strict";
var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync");
  del = require("del");
  imagemin = require("imagemin");
gulp.task("sass", function() {
  return gulp
    .src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});
gulp.task("sass:watch", function() {
  gulp.watch("./css/*.scss", ["sass"]);
});
gulp.task("browserSync", function() {
  var files = ["./*.html", "./css/*.css", "./js/*.js", "./img/*.{png,jpg,gif}"];
});
browserSync.init("files", {
  server: {
    baseDir: "./"
  }
});
gulp.task("default", ["browser-sync"], function() {
  gulp.start("sass:watch");
});
gulp.task("clean", function() {
  return del(["dist"]);
});
gulp.task("copyfonts", function() {
  gulp
    .src("./node_module/font-awesome/fonts/**/*.{ttf,wolf,eof,svg}*")
    .pipe(gulp.dest(".dist/fonts"));
});
gulp.task("imagemin", function() {
  return gulp
    .src("img/*.{png,jpg,gif}")
    .pipe(
      imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })
    )
    .pipe(gulp.dest("dist/img"));
});
gulp.task("build", ["clean"], function() {
  gulp.start("copyfonts", "imagemin");
});
