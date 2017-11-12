define(['git_log_out', 'parse_git_log_out'], function(git_log_out, parse_git_log_out){

  describe("sample_test", function(){
    it('should pass', function(){
      expect(true);
    })
  })

  describe("git_log_out", function(){
    var git_log_out_lines = git_log_out.lines;
    it('git_log_out_lines should return lines, array of 79 strings', function(){
      expect(79).toEqual(git_log_out_lines.length);
    })
    it('git_log_out_lines[1] should be ...', function(){
      expect('*   |=;07a1266|=;d5584f0 5f6f8f3|=;|=;Merge pull request #32 from EvilPudding/master|=;2016-02-06|=;Mike Anchor|=;')
        .toEqual(git_log_out_lines[1]);
    })
    it('git_log_out_lines[78] should be ...', function(){
      expect('* |=;a1c581b|=;|=;|=;Initial commit|=;2010-09-21|=;MJPA|=;')
        .toEqual(git_log_out_lines[78]);
    })
  })

  describe("parse_git_log_out", function(){
    var lines = git_log_out.lines;
    var objects = parse_git_log_out.get_commit_objects_from_lines(lines);
    var nodes_and_arcs = parse_git_log_out.get_commit_nodes_and_arcs(objects);

    // objects
    it('parse_git_log_out.get_commit_objects_from_lines should return array of 60 objects', function(){
      expect(60).toEqual(objects.length);
    })
    it('objects[1] should be ...', function(){
      expect({ graph: '*   ', sha: '07a1266', parents: [ 'd5584f0', '5f6f8f3' ], refs: '', summary: 'Merge pull request #32 from EvilPudding/master', date: '2016-02-06', author: 'Mike Anchor' })
        .toEqual(objects[1]);
    })
    it('objects[59] should be ...', function(){
      expect({ graph: '* ', sha: 'a1c581b', parents: [ '' ], refs: '', summary: 'Initial commit', date: '2010-09-21', author: 'MJPA' })
        .toEqual(objects[59]);
    })

    // nodes
    it('parse_git_log_out.get_commit_nodes_and_arcs should return an object', function(){
      expect(['nodes', 'arcs']).toEqual(Object.keys(nodes_and_arcs));
    })
    it('nodes_and_arcs.nodes should be an array', function(){
      expect(60).toEqual(nodes_and_arcs.nodes.length);
    })
    it('nodes_and_arcs.nodes[2] should be ...', function(){
      expect({ col: 1, row: 2, commit: { graph: '| * ', sha: '5f6f8f3', parents: [ '7ce5b58' ], refs: '', summary: 'Optimization.', date: '2015-12-11', author: 'EvilPudding' } })
        .toEqual(nodes_and_arcs.nodes[2]);
    })

    // arcs
    it('nodes_and_arcs.arcs should be an array', function(){
      expect(68).toEqual(nodes_and_arcs.arcs.length);
    })
    it('nodes_and_arcs.arcs[1] should be array[2]', function(){
      expect(2).toEqual(nodes_and_arcs.arcs[1].length);
    })
    it('nodes_and_arcs.arcs[1][] elements should be objects with ...', function(){
      const arc1 = nodes_and_arcs.arcs[1];
      expect([ 'col', 'row', 'commit']).toEqual(Object.keys(arc1[0]));
      expect([ 'col', 'row', 'commit']).toEqual(Object.keys(arc1[1]));
      expect([ 0, 1, 0, 3 ]).toEqual([arc1[0].col, arc1[0].row, arc1[1].col, arc1[1].row ]);
    })
  })

})
