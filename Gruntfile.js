module.exports = function(grunt) {

	// Configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		recess: {
			options: {
				compile: true
			},
			compile: {
				src: ['src/less/framework.less'],
				dest: '<%= pkg.name %>.css'
			},
			min: {
				options: {
					compress: true
				},
				src: ['src/less/framework.less'],
				dest: '<%= pkg.name %>.min.css'
			}
		}
	});

	// Load plugins here
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Define your tasks here


	grunt.registerTask('default', ['recess']);

};