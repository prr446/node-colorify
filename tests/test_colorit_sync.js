var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("colorit -  Synchronous", function(){

  it("should produce black by default", function(done){
    expect('\x1b[30mcolorify\x1b[0m').equals(color.coloritSync('colorify'));
    done();
  });

  it("should produce black", function(done){
    expect('\x1b[30mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'black'));
    done();
  });

  it("should produce red", function(done){
    expect('\x1b[31mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'red'));
    done();
  });

  it("should produce green", function(done){
    expect('\x1b[32mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'green'));
    done();
  });

  it("should produce yellow", function(done){
    expect('\x1b[33mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'yellow'));
    done();
  });

  it("should produce blue", function(done){
    expect('\x1b[34mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'blue'));
    done();
  });

  it("should produce magenta", function(done){
    expect('\x1b[35mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'magenta'));
    done();
  });

  it("should produce cyan", function(done){
    expect('\x1b[36mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'cyan'));
    done();
  });

  it("should produce white", function(done){
    expect('\x1b[37mcolorify\x1b[0m').equals(color.coloritSync('colorify', 'white'));
    done();
  });

});
