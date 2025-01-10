const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');

console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);

console.error('에러 메시지는 console.error에 담아주세요');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988 }]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}

function a() {
    b();
}

a();

console.timeEnd('전체 시간');



// $ node console
// 평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다
// abc 1 true
// 에러 메시지는 console.error에 담아주세요
// ┌─────────┬──────────┬───────┐
// │ (index) │   name   │ birth │
// ├─────────┼──────────┼───────┤
// │    0    │  '제로'  │ 1994  │
// │    1    │  'hero'  │ 1988  │
// └─────────┴──────────┴───────┘
// { outside: { inside: { key: 'value' } } } // depth: 2
// { outside: { inside: [Object] } } // depth: 1
// 시간 측정: 2.345ms
// 전체 시간: 12.456ms
// 에러 위치 추적
//     at b (console.js:20:13)
//     at a (console.js:24:9)
//     at Object.<anonymous> (console.js:28:1)
