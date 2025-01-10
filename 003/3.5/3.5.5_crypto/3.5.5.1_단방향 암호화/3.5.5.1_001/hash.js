const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));



// $ node hash.js
// base64: dvfV6nyLRRt3NxKSlTH0kkEGqqW2HRtfu190u/psUXwlebbXCboxIPmDY0RFIpqav2eUTBFuHaZri5+xusy1g==
// hex: 76f7d5ea7c8b451b773712929531ce92410682a5b61d1b5fbb5f4ebbfa6c517bf095e6db5c26e8c483e60d8385448a6a6afd9e513045b87699ae2e71faeb32d6
// base64: cx49cjC8tkTMzwJGBY853itZeb6qxzXGvuUJKbWTGn5VXAFbAwXGEOxU2Qksoj+aM2GWPhtc107mmky0hXMsQw==
