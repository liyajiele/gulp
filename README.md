gulp
===
# gulp是前端开发过程中对代码进行构建的工具，是自动化构建项目的利器。<br>
## 安装gulp<br>
npm install --global gulp`(全局安装gulp)`<br>
npm install --save-dev gulp`(作为项目的开发依赖安装)`<br>
## 安装插件`(需在gulp文件目录下安装)`<br>
##### less转css<br>
    npm install gulp-less --save-dev
    var gulp=require('gulp');
    var less=require('gulp-less');
##### js转min.js<br>
    npm install gulp-uglify --sava-dev
    var gulp=require('gulp');
    var uglify=require('gulp-uglify');
##### html转html.min<br>
    npm install gulp-htmlmin --sava-dev
    var gulp=require('gulp');
    var htmlmin=require('gulp-htmlmin');
##### css转min.css<br>
    npm install gulp-cssnano --sava-dev
    var gulp=require('gulp');
    var cssnano=require('gulp-cssnano');
##### 重命名<br>
    npm install gulp-rename --sava-dev
    var gulp=require('gulp');
    var rename=require('gulp-rename');
##### 文件打包，多个合并为一个<br>
    npm install gulp-concat --sava-dev
    var gulp=require('gulp');
    var concat=require('gulp-concat');
##### 图片压缩<br>
    npm install gulp-imagemin --sava-dev
    var gulp=require('gulp');
    var imagemin=require('gulp-imagemin');
[参考网址]（www.cnblogs.com/fx2008/p/6053999.html）
