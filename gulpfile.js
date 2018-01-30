
//载入gulp核心包
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const minifyCss = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const del = require('del');
const connect = require('gulp-connect');


const concat = require('gulp-concat');


//压缩html文件
gulp.task('htmlmin',function () {
    gulp.src('html/*.*')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/html'));
});
//复制html文件
gulp.task('htmlcopy',function () {
    gulp.src('html/*.*')
        .pipe(gulp.dest('dist/html'));
});


//压缩css
gulp.task ('minify',function () {
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

//复制css
gulp.task ('minicopy',function () {
    gulp.src('css/*.css')
        .pipe(gulp.dest('dist/css'));
});

//压缩image文件
gulp.task ('imagemin',function () {
    gulp.src('images/*.*')
        .pipe(gulp.dest('dist/images'));
});

//压缩js
gulp.task ('uglify',function () {
    gulp.src('js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//复制js
gulp.task ('uglifycopy',function () {
    gulp.src('js/*.*')
        .pipe(gulp.dest('dist/js'));
});
//copy Particle
gulp.task('particles',function () {
    gulp.src('particles/**/*.*')
        .pipe(gulp.dest('dist/particles'));
})

//copy bootstrap
gulp.task('bootstrap',function () {
    gulp.src('bootstrap/**/*.*')
        .pipe(gulp.dest('dist/bootstrap'));
})


//del
gulp.task('clean',function () {
    del(['dist/html','dist/css','dist/images','dist/js']);
})
// no
gulp.task ('watch',function () {
    gulp.watch('css/test.less',['style']);
})


//server
gulp.task('serve',function () {
   connect.server({
       root:'dist',
       livereload: true
   });
    gulp.watch('dist/**/*.*',['reload']);
});
//reload
gulp.task('reload',function () {
    gulp.src('dist/**/*.*')
        .pipe(connect.reload());
});

gulp.task('default',['htmlcopy','minicopy','imagemin','uglifycopy','serve']);
