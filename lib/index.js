var _ = require('underscore');

var ANSI_FCOLORS = {
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

var ANSI_BCOLORS = {
  'DEFAULT': '\x1b[40m',
  'BLACK': '\x1b[40m',
  'RED': '\x1b[41m',
  'GREEN': '\x1b[42m',
  'YELLOW': '\x1b[43m',
  'BLUE': '\x1b[44m',
  'MAGENTA': '\x1b[45m',
  'CYAN': '\x1b[46m',
  'WHITE': '\x1b[47m'
}

var ANSI_FORMATS = {
  'BOLD': '\x1b[1m',
  'LIGHT': '\x1b[2m',
  'ULINE': '\x1b[4m',
  'BLINK': '\x1b[5m',
  'INVERSE': '\x1b[7m',
  'HIDE': '\x1b[8m'
}

var ANSI_CLEAR = '\x1b[0m';

module.exports = {
  colorit : function(text, color, callback){
    if(_.isUndefined(callback)){
      callback = color;
      return callback(ANSI_COLORS['DEFAULT'] + text + ANSI_CLEAR);
    }
    else if(!(_.has(ANSI_COLORS, color.toUpperCase()))){
      return callback(ANSI_COLORS['DEFAULT'] + text + ANSI_CLEAR);
    }
    else {
      return callback(ANSI_COLORS[color.toUpperCase()] + text + ANSI_CLEAR);
    }
  },

  coloritSync : function(text, color){
    if(_.isUndefined(color)){
      return ANSI_COLORS['DEFAULT'] + text + ANSI_CLEAR;
    }
    else if(!(_.has(ANSI_COLORS, color.toUpperCase()))){
      return ANSI_COLORS['DEFAULT'] + text + ANSI_CLEAR;
    }
    else {
      return ANSI_COLORS[color.toUpperCase()] + text + ANSI_CLEAR;
    }
  },

  formatit: function(text, formats, callback){
    if(_.isUndefined(callback)){
      callback = formats;
      return callback(text);
    }
    else if(_.isEmpty(formats)){
      return callback(text);
    }
    else{
      var combinedFormat = '';
      for(var format of formats){
        if(_.has(ANSI_FORMATS, format.toUpperCase())){
          combinedFormat += ANSI_FORMATS[format.toUpperCase()];
        }
      }
      return callback(combinedFormat + text + ANSI_CLEAR);
    }
  },

  formatitSync: function(text, formats){
    if(_.isUndefined(formats)){
      return text;
    }
    else {
      var combinedFormat = '';
      for(var format of formats){
        if(_.has(ANSI_FORMATS, format.toUpperCase())){
          combinedFormat += ANSI_FORMATS[format.toUpperCase()];
        }
      }
      return combinedFormat + text + ANSI_CLEAR;
    }
  }
}
