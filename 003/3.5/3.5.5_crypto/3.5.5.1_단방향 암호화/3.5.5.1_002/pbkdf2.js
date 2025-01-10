const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);

  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
  });
});



// $ node pbkdf2.js
// salt: OnesIj8wznyKgHva1fmulYAgjf/OGLmJnwfy8pIABchHZF/Wn2AM2Cn/9170Y1AdehmJOE5CzLZULps+daf6rA==
// password: b4/FpSrZulVY28trzNXsI4vVfhOKBPxyVAvwnUCWF1nnXS1zsU1Paq2p68vWufhB0LDD44hJOf+Le3HMLVmQ==
