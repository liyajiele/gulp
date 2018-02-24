//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
        
    gulp.src('src/minjs/index.js')// 2.将js代码压缩混淆
       .pipe(uglify())
       .pipe(gulp.dest('src/js'))    
       
    gulp.src('src/*.html')// 2.对html进行压缩!
	    .pipe(htmlmin({
	      collapseWhitespace:true // 去除空白符
	    }))
	    .pipe(gulp.dest('dist'))
       
    gulp.src('src/css/index.css')
	     .pipe(cssnano())// 消化，转换，压缩
	     .pipe(gulp.dest('dist/css'))
     
    gulp.src('src/js/index.js')
	    .pipe(rename('app.js'))
	    .pipe(gulp.dest('js'))
	    
	gulp.src('src/js/*.js')
	    .pipe(concat('main.js'))
	    .pipe(gulp.dest('demo'))
	    
    gulp.src('img')
	    .pipe(imagemin())
	    .pipe(gulp.dest('demo'))
})
       


gulp.task('default',['testLess']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径 