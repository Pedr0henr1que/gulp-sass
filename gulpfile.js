const gulp = require('gulp');
const sass = require('gulp-sass')(require(sass));

function compilaSass(){
    return gulp.src('./source/syles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback){
    setTimeout(function(){
        console.log("Executando via gulp");
        callback();
    }, 2000);
}

function dizOi(callback){
    console.log("Olá gulp");
    dizTchau();
    callback();
}

function dizTchau(){
    console.log("Tchau Gulp");
}
    
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi= dizOi;
exports.Sass = compilaSass;