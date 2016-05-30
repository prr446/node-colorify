var color = require(__dirname + '/../lib/index');
var expect = require('chai').expect;

describe("formatIt - Asynchronous", function(){

  it("should return text without formatting", function(done){
    color.formatIt('colorify',function(formattedText){
      expect('colorify').equals(formattedText);
      done();
    });
  });

  it("should produce bold", function(done){
    color.formatIt('colorify', ['bold'], function(formattedText){
      expect('\x1b[1mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce light", function(done){
    color.formatIt('colorify', ['light'], function(formattedText){
      expect('\x1b[2mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce uline", function(done){
    color.formatIt('colorify', ['uline'], function(formattedText){
      expect('\x1b[4mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce blink", function(done){
    color.formatIt('colorify', ['blink'], function(formattedText){
      expect('\x1b[5mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce inverse", function(done){
    color.formatIt('colorify', ['inverse'], function(formattedText){
      expect('\x1b[7mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

  it("should produce hide", function(done){
    color.formatIt('colorify', ['hide'], function(formattedText){
      expect('\x1b[8mcolorify\x1b[0m').equals(formattedText);
      done();
    });
  });

});
