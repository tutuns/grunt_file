module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //jshint
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
	},
    //concat
	concat: {
		options: {
		  separator: ';',
	      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
		},
		dist: {
		  src: ['src/js/header.js', 'src/js/sidebar.js', 'src/js/popup.js'],
		  dest: 'src/js/common.js',
		},
	},
	//sass
	sass: {
		dist: {
		  files: [{
		    expand: true,
		    cwd: 'styles',
		    src: ['src/scss/*.scss'],
		    dest: '../css',
		    ext: '.css'
		  }]
		}
	},
	//watch
	watch: {
	  scripts: {
	    files: ['src/js/**/*.js', 'src/js/*.js'],
	    tasks: ['jshint'],
	    options: {
	      spawn: false,
	      interrupt: true,
	      event: ['all', 'changed', 'added', 'deleted'],
	      reload: true,
	      forever: true,
	      livereload: true,
	    },
	  },

	  css: {
	    files: ['src/scss/**/*.scss', 'src/scss/*.scss'],
	    tasks: ['sass'],
	    options: {
	      spawn: false,
	      interrupt: true,
	      event: ['all', 'changed', 'added', 'deleted'],
	      reload: true,
	      forever: true,
	      livereload: true,
	    },
	  },

	},
  });




  // Load the plugin that provides the "jshint" task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'watch']); //'sass',

}