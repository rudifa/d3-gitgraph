// Requirejs Configuration Options
/*
RequireJS loads all code relative to a baseUrl. The baseUrl is normally
set to the same directory as the script used in a data-main attribute
for the top level script to load for a page.
*/
require.config({
  // to set the default folder
  baseUrl: './',
  // paths: maps ids with paths (no extension)
  paths: {
      'jasmine': ['../../../jasmine-require/tests/lib/jasmine'],
      'jasmine-html': ['../../../jasmine-require/tests/lib/jasmine-html'],
      'jasmine-boot': ['../../../jasmine-require/tests/lib/boot'],
      // test specs modules
      'gitgraph.specs': ['./gitgraph.specs'], // redundant because in same dir as main.js
      'gitgraph2.specs': ['./gitgraph2.specs'], // redundant because in same dir as main.js
      // modules under test
      'git_log_out': ['../www/app/git_log_out'],
      'parse_git_log_out': ['../www/app/parse_git_log_out']
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  // require specs modules, which will require modules under test
  require(['gitgraph2.specs'], function(){
    //trigger Jasmine
    window.onload();
  })
});
