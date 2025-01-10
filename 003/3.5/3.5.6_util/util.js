const util = require('util');
const crypto = require('crypto');

// util.deprecate: Deprecated된 함수 경고
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

// util.promisify: 콜백 패턴을 프로미스 패턴으로 변환
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });



// $ node util.js
// 3
// (node:7264) DeprecationWarning: dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!
// (Use `node --trace-deprecation ...` to show where the warning was created)
// 60b4RQbrxj1i30x4r95fpZac9lmchyiqwAm8gKSHQKF8tcNhvcTfW031XaQqHLRKzavVkcENmIV25fDVS3SB7g==
