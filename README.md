# node-colorify
## (color texts in console)
### A node library for printing colored texts in terminal. Uses ANSII color codes to format the color printed on console. node-colorify is easy to use and supports additional text formatting.

Project work is still under progress. Bringing up almost all ANSI color formats.

## Install
```sh
$ npm install node-colorify
```
Require as follows: 

```js
var color = require('node-colorify');
```

## Basic Example

```js
var color = require('node-colorify');

//start using it
console.log(color.colorit('Hello World..!!', 'green');
console.log(color.colorit('Hello World..!!', 'blue');
console.log(color.colorit('Hello World..!!', 'magenta');
```

## API Documentation

#### `colorit(text, color, callback)` - Asynchronous
This function will return the ANSII formatted string of given color asynchronously.
##### color
Supported list of colors:

    1. BLACK (DEFAULT)
    2. RED
    3. GREEN
    4. YELLOW
    5. BLUE
    6. MAGENTA
    7. CYAN
    8. WHITE

#### `coloritSync(text, color)` - synchronous
Same as that of colorit functionality, returns the ANSII formatted string of given color synchronously.

## Releases 
###### v1.0.0 - Initial Release
### Contributors:
##### [raghu](http://twitter.com/raghu12133)
