var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var paths = {
    pages: ['src/*.html']
};

gulp.task("copy-scripts", function(){
    return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist/scripts"));
});
gulp.task("copy-html", function(){
    return gulp.src(paths.pages).pipe(gulp.dest("dist"));
})
gulp.task("default",["copy-scripts","copy-html"], function(){
    return browserify({
        basedir: ".",
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});