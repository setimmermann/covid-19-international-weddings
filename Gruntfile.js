module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),



    //watch for changes, and do a different action depending on situation
    watch: {
      options: {
        spawn: false,
        event: ['all'],
        livereload: true,
      },
      scripts: {
        files: '**/*.js'
      },
      styles: {
        files: '**/*.css'
      },
      html: {
        files: ['**/*.html']
      }
    },

    //make a webserver on the src folder
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          livereload: true,
          // keepalive: true,
          base: "./src"
        }
      }
    }


  });

  var ghpages = require('gh-pages');

  grunt.registerTask('publish', 'Publish project to gh-pages', ()=>{
    ghpages.publish('src',  {push: true}, function(err){
      grunt.log.writeln(err);
    });
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  //create build folder and run watch task
  grunt.registerTask('default', ['connect','watch']);

};