const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('dragon_spider/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask(){
    watch(['dragon_spider/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)