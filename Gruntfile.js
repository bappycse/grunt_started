module.exports = function(grunt){
	grunt.initConfig({
	  concat: {
	    dist: {
	      src: ['js/1.js', 'js/2.js'],
	      dest: 'build/js/script.js',
	    },
	     css: {
	      src: ['css/1.css', 'css/2.css'],
	      dest: 'build/css/main.css',
	    }
	  },
	  watch: {
	    js: {
	      files: ['js/**/*.js'],
	      tasks: ['concat'],
	    },
	    css: {
	      files: ['css/**/*.css'],
	      tasks: ['concat'],
	    },
	  },
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
};


