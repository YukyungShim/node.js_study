console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);

console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);


// $ node require
// require가 가장 위에 오지 않아도 됩니다.
// require.cache입니다.
// [Object: null prototype] {
//   'C:\\Users\\yukyu\\require.js': Module {
//     id: '.',
//     exports: '저를 찾아보세요.',
//     filename: 'C:\\Users\\yukyu\\require.js',
//     loaded: false,
//     children: [ [Module] ],
//     paths: [
//       'C:\\Users\\yukyu\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   },
//   'C:\\Users\\yukyu\\var.js': Module {
//     id: 'C:\\Users\\yukyu\\var.js',
//     exports: { odd: 'CJS 홀수입니다', even: 'CJS 짝수입니다' },
//     filename: 'C:\\Users\\yukyu\\var.js',
//     loaded: true,
//     children: [],
//     paths: [
//       'C:\\Users\\yukyu\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ]
//   }
// }
// require.main입니다.
// true
// C:\Users\yukyu\require.js
