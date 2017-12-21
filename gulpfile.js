/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var bases = {
    blueimp: "bower_components/blueimp/",
    src: "src/",
    distLib: "dist/lib/blueimp/"
};

// task
gulp.task("import-library", function () {
    // BlueImp JS - merge if I have many...
    gulp.src([bases.blueimp + "js/jquery.blueimp-gallery.min.js"])
        .pipe(gulp.dest(bases.distLib + "js/"));

    // Blueimp CSS
    gulp.src(bases.blueimp + "css/blueimp-gallery.min.css")
        .pipe(gulp.dest(bases.distLib + "css/"));

    // Blueimp images / icons
    gulp.src(bases.blueimp + "img/*.*")
        .pipe(gulp.dest(bases.distLib + "img/"));
});

var sourceFiles = ['./src/**/*.scss'];

gulp.task('watch-sass', function () {
	gulp.watch(sourceFiles, ['sass']);
});

gulp.task('watch-javascript', function () {
	gulp.watch(['./src/**.js'], ['javascript']);
});

gulp.task('sass', function () {
  return gulp.src(sourceFiles)
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '../src/' }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('javascript', function() {
	return gulp.src('./src/**.js')
		.pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['sass', 'javascript', 'watch-sass', 'watch-javascript']);