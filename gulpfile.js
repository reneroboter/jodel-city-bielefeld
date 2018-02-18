let config = require('./configuration'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

gulp.task('css', function () {
    return gulp.src(config.paths.css.src + 'main.scss')
        .pipe(sass())
        .pipe(concat('main.min.css'))
        .pipe(csso())
        .pipe(gulp.dest(config.paths.css.dest))
});

gulp.task('js', function () {
    gulp.src([config.paths.js.src  + 'twemoji.min.js'])
        .pipe(concat('head.min.js'))
        .pipe(gulp.dest(config.paths.js.dest));

    return gulp.src([
        config.basePaths.node  + 'jquery/dist/jquery.min.js',
        config.basePaths.node  + 'popper.js/dist/umd/popper.min.js', // https://github.com/FezVrasta/popper.js/issues/429
        config.basePaths.node  + 'bootstrap/dist/js/bootstrap.min.js',
        config.basePaths.node  + 'vue/dist/vue.js',
        config.paths.js.src + 'vue.js',
        config.paths.js.src + 'app.js',])
        .pipe(minify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(config.paths.js.dest))
});

gulp.task('fonts', function () {
    gulp.src('resources/fonts/*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('default', ['css', 'js', 'fonts']);