const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();


// $ node dep-run
// require dep1 {}
// require dep2 [Function (anonymous)]
// dep2 [Function (anonymous)]
// dep1 {}
// (node:29044) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// ...
