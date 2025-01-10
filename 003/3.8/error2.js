const fs = require('fs');

setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);



// $ node error2
// [Error: ENOENT: no such file or directory, unlink './abcdefg.js'] {
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'unlink',
//   path: './abcdefg.js'
// }
// // 계속 반복
