var _ = require('underscore');

var COLORS = {
  'DEFAULT': '\x1b[30m',
  'BLACK':   '\x1b[30m',
  'RED':     '\x1b[31m',
  'GREEN':   '\x1b[32m',
  'YELLOW':  '\x1b[33m',
  'BLUE':    '\x1b[34m',
  'MAGENTA': '\x1b[35m',
  'CYAN':    '\x1b[36m',
  'WHITE':   '\x1b[37m'
}

var END = '\x1b[0m';

module.exports = {
  colorit : function(text, color){
    if(_.isNull(color) || !(_.has(COLORS, color.toUpperCase()))){
      return COLORS['DEFAULT'] + text + END
    }
    else {
      return COLORS[color.toUpperCase()] + text + END
    }
  }
}
