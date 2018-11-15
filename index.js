const RESET = '\x1b[0m';
const COLORS = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

const buildColorString = ( color, string ) => `${COLORS[color]}${string}${RESET}`;

const colorSetJoiner = ( set ) => Object.keys(set)
    .map(color => buildColorString( color, set[color] ) )
    .join('');

const build = ( data ) => {
    if( Array.isArray( data ) )
        return data
            .map( colorSetJoiner )
            .join('');
    return colorSetJoiner( data );
};

exports.colors = build;
for(const color in COLORS)
    exports[color] = ( string ) => buildColorString( color, string );