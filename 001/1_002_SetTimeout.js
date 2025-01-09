// 특정 밀리초(1,000분의 1초) 이후에 코드 실행

function run() {
    console.log('3초 후 실행');
}

console.log('시작');
setTimeout(run, 3000);
console.log('끝');