const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수이면
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); // 숫자의 홀짝 판단
console.log(checkStringOddOrEven('hello')); // 문자열 길이의 홀짝 판단


// // $ node index
// CJS 짝수입니다
// CJS 홀수입니다