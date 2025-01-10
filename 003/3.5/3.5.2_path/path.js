const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);

console.log('--------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));

console.log('path.parse():', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:\\Users\\zerocho',
    name: 'path',
    ext: '.js',
}));

console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\path.js'));
console.log('--------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('path.relative():', path.relative('C:\\Users\\zerocho\\path.js', 'C:\\'));

console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', '..', 'users', '.', '/zerocho'));



// $ node path
// path.sep: \
// path.delimiter: ;

// --------------------------
// path.dirname(): C:\Users\zerocho
// path.extname(): .js
// path.basename(): path.js
// path.basename - extname: path

// path.parse(): {
//   root: 'C:\\',
//   dir: 'C:\\Users\\zerocho',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path'
// }

// path.format(): C:\Users\zerocho\path.js
// path.normalize(): C:\users\zerocho\path.js

// --------------------------
// path.isAbsolute(C:\): true
// path.isAbsolute(./home): false
// path.relative(): ..\..\..\

// path.join(): C:\Users\zerocho
// path.resolve(): C:\zerocho
