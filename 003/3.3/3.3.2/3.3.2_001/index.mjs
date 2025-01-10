import { odd, even } from './var.mjs';
import checkNumber from './func.mjs';

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수이면
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); // 숫자의 홀짝 판단
console.log(checkStringOddOrEven('hello')); // 문자열 길이의 홀짝 판단


// $ node index.mjs
// MJS 짝수입니다
// MJS 홀수입니다
