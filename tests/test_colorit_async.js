var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("colorit - Asynchronous", function(){

  it("should produce black by default", function(done){
    color.colorit('colorify',function(formattedText){
      expect('\x1b[30mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce black", function(done){
    color.colorit('colorify', 'black', function(formattedText){
      expect('\x1b[30mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce red", function(done){
    color.colorit('colorify', 'red', function(formattedText){
      expect('\x1b[31mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce green", function(done){
    color.colorit('colorify', 'green', function(formattedText){
      expect('\x1b[32mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce yellow", function(done){
    color.colorit('colorify', 'yellow', function(formattedText){
      expect('\x1b[33mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce blue", function(done){
    color.colorit('colorify', 'blue', function(formattedText){
      expect('\x1b[34mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce magenta", function(done){
    color.colorit('colorify', 'magenta', function(formattedText){
      expect('\x1b[35mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce cyan", function(done){
    color.colorit('colorify', 'cyan', function(formattedText){
      expect('\x1b[36mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce white", function(done){
    color.colorit('colorify', 'white', function(formattedText){
      expect('\x1b[37mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

});
