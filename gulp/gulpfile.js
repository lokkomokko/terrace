var svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	sass = require('gulp-sass'),
	gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger');
// sprite svg

gulp.task('svg', function () {
	return gulp.src('for_sprite/*.svg')
	// minify svg
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				// $('[fill]').removeAttr('fill');
				// $('[stroke]').removeAttr('stroke');
				// $('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "./sprite-genplan.svg",
					render: {
						scss: {
							dest:'../../css/sprite/svg_sprite-genplan.scss',
							template: "template/_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest( '../img/'));

});

	gulp.task('js', function () {
	    gulp.src('../js_dev/dev/common.js') 
	        .pipe(rigger()) 
	        .pipe(sourcemaps.init()) 
	        .pipe(uglify()) 
	        .pipe(sourcemaps.write()) 
	        .pipe(gulp.dest('../js/'))
	});

	gulp.task('watch',function() {

	    watch('../js_dev', function(event, cb) {
	        gulp.start('js');
	    });

	});

// for new place :

// npm link gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace

