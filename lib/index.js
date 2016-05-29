var _ = require('underscore');

var ANSI_COLORS = {
  'DEFAULT': '\x1b[30m',
  'BLACK': '\x1b[30m',
  'RED': '\x1b[31m',
  'GREEN': '\x1b[32m',
  'YELLOW': '\x1b[33m',
  'BLUE': '\x1b[34m',
  'MAGENTA': '\x1b[35m',
  'CYAN': '\x1b[36m',
  'WHITE': '\x1b[37m'
}

var ANSI_END = '\x1b[0m';

module.exports = {
  colorit : function(text, color, callback){
    if(_.isUndefined(callback)){
      callback = color;
      return callback(ANSI_COLORS['DEFAULT'] + text + ANSI_END);
    }
    else if(!(_.has(ANSI_COLORS, color.toUpperCase()))){
      return callback(ANSI_COLORS['DEFAULT'] + text + ANSI_END);
    }
    else {
      return callback(ANSI_COLORS[color.toUpperCase()] + text + ANSI_END);
    }
  },

  coloritSync : function(text, color){
    if(_.isUndefined(color)){
      return ANSI_COLORS['DEFAULT'] + text + ANSI_END;
    }
    else if(!(_.has(ANSI_COLORS, color.toUpperCase()))){
      return ANSI_COLORS['DEFAULT'] + text + ANSI_END;
    }
    else {
      return ANSI_COLORS[color.toUpperCase()] + text + ANSI_END;
    }
  }
}
