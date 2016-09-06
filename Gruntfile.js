module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      coffee: {
        cmd: 'coffee -c server.coffee && \
          coffee -c javascripts/*.coffee'
      },
      scss: {
        cmd: 'sass --sourcemap=none --watch stylesheets'
      },
      server: {
        cmd: 'node server.js'
      },
      deploy: {
        cmd: 'git checkout gh-pages && \
          git merge master && \
          git push origin gh-pages && \
          git checkout master',
      },
    },
    concurrent: {
      all: ['exec:scss', ['exec:coffee', 'exec:server']]
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.registerTask('server', ['exec:server']);
  grunt.registerTask('deploy', ['exec:deploy']);
  grunt.registerTask('coffee', ['exec:coffee']);
  grunt.registerTask('scss', ['exec:scss']);
  grunt.registerTask('default', ['concurrent:all']);
};
