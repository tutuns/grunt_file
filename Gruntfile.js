module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //connect
    connect: {
		server: {
			options: {
				port: 9000,
				base: 'src',
				hostname: 'localhost', 
				livereload: 35729,
				keepalive: true,
				open: {
					target: 'http://localhost:9000'
				}
			}		
		}
	},

  });




  // Load the plugin that provides the "jshint" task
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['connect']); //'sass' should goes in 3rd position,

}