const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', [...myURL.searchParams.keys()]);
console.log('searchParams.values():', [...myURL.searchParams.values()]);

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();



// $ node searchParams.js
// searchParams: URLSearchParams { 'page' => '3', 'limit' => '10', 'category' => 'nodejs', 'category' => 'javascript' }
// searchParams.getAll(): [ 'nodejs', 'javascript' ]
// searchParams.get(): 10
// searchParams.has(): true
// searchParams.keys(): [ 'page', 'limit', 'category', 'category' ]
// searchParams.values(): [ '3', '10', 'nodejs', 'javascript' ]
// [ 'es3', 'es5' ]
// [ 'es6' ]
// []
// searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript
