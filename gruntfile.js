

module.exports = function (grunt) {
	grunt.initConfig ({

		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/css/style.css' : 'sass/style.scss'
				}
			}
		},
		cssmin: {
			minify: {
				src: 'dist/css/style.css',
				dest: 'dist/css/minified/style.min.css'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'dist/css/minified/style.min.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					server: './'
				}
			}
		},

		watch: {
			css: {
				files: 'sass/style.scss',
				tasks: ['sass', 'cssmin']
			}
		},
		imagemin: {
					dynamic: {
						files: [{
							expand: true,
							cwd: 'images/',
							src: ['**/*.{png,jpg,gif,jpeg}'],
							dest: 'dist/resized'
						}]
					}
				}


	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin', 'browserSync', 'watch']);
}