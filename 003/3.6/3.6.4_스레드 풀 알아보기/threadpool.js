const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7:', Date.now() - start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8:', Date.now() - start);
});



// $ node threadpool
// 4: 1548
// 1: 1583
// 2: 1590
// 3: 1695
// 6: 3326
// 5: 3463
// 7: 3659
// 8: 3682
