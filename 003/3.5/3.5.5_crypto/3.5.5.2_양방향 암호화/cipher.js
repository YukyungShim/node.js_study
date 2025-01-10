const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyzt123456'; // 32바이트 키
const iv = '1234567890123456'; // 16바이트 IV

// 암호화
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

// 복호화
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);



// $ node cipher.js
// 암호화: iiopeG2GsYlK6ccoBoFvEH2EBDMWv1kK9bNuDjYxiN0=
// 복호화: 암호화할 문장
