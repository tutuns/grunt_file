module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint : {
    	files: ['./src/js/*.js'],
		options: {
		    "curly": true,
		    "eqnull": true,
		    "eqeqeq": true,
		    "undef": true,
		    "globals": { "jQuery": true },
		    reporter: require('jshint-stylish'),

		}
	}
  });

  // Load the plugin that provides the "jshint" task
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

}