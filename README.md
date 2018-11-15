# Colors
Simple tool to color text in console
### Installation
```
npm install --save github:AveryanovS/node.Colors
```
### Usage
The easiest way is to require single color and use it to get prepared string
```javascript
const { magenta } = require('node.Colors');

console.log( magenta('magenta') );
```
You can also build string with different colored parts
```javascript
const { colors } = require('node.Colors');

console.log( colors(
        { green: 'green', yellow: 'yellow', red: 'red' }
    ) 
);
```
If one color repeats, just use array of objects
```javascript
console.log( colors([
        { green: 'green', yellow: 'yellow', red: 'red' }
        { blue: 'blue', cyan: 'cyan', red: 'red' }
    ]) 
);
```