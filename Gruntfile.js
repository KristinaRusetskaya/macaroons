module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'dist/styles/style.css': 'src/styles/style.less'
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles/style.min.css': ['dist/styles/style.css']
                }
            }
        },
        clean: ['dist/styles/style.css', 'dist/styles/style.css.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
};