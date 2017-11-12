// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        git_log_out: '../app',
        parse_git_log_out: '../app',
        d3: "https://d3js.org/d3.v4"
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);

//console.log('app.js require', require);
