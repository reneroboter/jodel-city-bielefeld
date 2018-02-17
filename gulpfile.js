var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('css', function(){
    return gulp.src('resources/scss/main.scss')
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', function () {
    gulp.src(['resources/js/twemoji.min.js'])
        .pipe(concat('head.min.js'))
        .pipe(gulp.dest('build/js'))

    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/popper.js/dist/umd/popper.min.js', // https://github.com/FezVrasta/popper.js/issues/429
        'node_modules/bootstrap/dist/bootstrap.js',
        'node_modules/vue/dist/vue.js',
        'resources/js/app.js',])
        .pipe(minify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build/js'))
});

gulp.task('fonts', function () {
    gulp.src('resources/fonts')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('default', ['css', 'js', 'fonts']);