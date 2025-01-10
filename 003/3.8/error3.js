const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./abcdefg.js').catch(console.error);
}, 1000);



// $ node error3
// [Error: ENOENT: no such file or directory, unlink './abcdefg.js'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'unlink',
//   path: './abcdefg.js'
// }
// // 계속 반복
