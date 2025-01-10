console.log(import.meta.url);
console.log('__filename은 에러');
console.log(__filename);


// $ node filename.mjs
// file:///C:/Users/yukyu/filename.mjs
// __filename은 에러
// ReferenceError: __filename is not defined in ES module scope