/*
    Gruntfile. To run:
    - install node
    - run `npm install` in the root directory
    - type in `grunt` to do run the build
    - type in `grunt watch` whilst developing


    Check out the registerTask statements at the bottom for an idea of
    task grouping.
*/
module.exports = function(grunt) {

    /* load dependencies */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
          // Read the package.json file for config values.
          //   package.json keeps devDependencies as well, which make it easy 
          //   for us to track and install node dependencies 
        
        pkg: grunt.file.readJSON('package.json'),

          // Uglify seems to be the industry standard for minification and obfuscation nowadays. 
        
        uglify: {
            options: {
                preserveComments: 'some'
            },
            build: {
                files: {
                    'lib/alert.min.js': ['lib/alert.js']
                }
            }
        }
    });

    // build and watch html/css
    grunt.registerTask('default', ['uglify']);
};
