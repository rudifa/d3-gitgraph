define(function (require) {

    // Load app-specific modules

    var git_log_out = require('./git_log_out');
    var parse_git_log_out = require('./parse_git_log_out');
    var plot_git_log_out = require('./plot_git_log_out');

    var lines = git_log_out.lines;
    var objects = parse_git_log_out.get_commit_objects_from_lines(lines);
    var nodes_and_arcs = parse_git_log_out.get_commit_nodes_and_arcs(objects);

    //console.log('parse_git_log_out.nodes_and_arcs=', nodes_and_arcs);

    plot_git_log_out.plot_git_log_out(nodes_and_arcs);

});
