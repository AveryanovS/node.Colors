const { colors, magenta } = require('../');

console.log( colors({ green: 'green', yellow: 'yellow', red: 'red' }));
console.log( colors([ { green: 'green', yellow: 'yellow', red: 'red' } , { blue:'blue', cyan:'cyan', red:'red'}]));
console.log( magenta('magnetta') );

