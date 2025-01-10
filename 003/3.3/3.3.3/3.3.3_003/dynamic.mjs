const a = true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);

    const m2 = await import('./var.mjs');
    console.log(m2);
}


// $ node dynamic.mjs
// [Module: null prototype] { default: [Function: checkOddOrEven] }
// [Module: null prototype] { even: 'MJS 짝수입니다', odd: 'MJS 홀수입니다' }
