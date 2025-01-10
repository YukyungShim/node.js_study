import { setTimeout, setInterval } from 'timers/promises';

await setTimeout(3000);
console.log('3초 뒤 실행');

for await (const startTime of setInterval(1000, Date.now())) {
    console.log('1초마다 실행', new Date(startTime));
}


// $ node timerPromise.mjs
// 3초 뒤 실행
// 1초마다 실행 2025-01-09T12:00:00.000Z
// 1초마다 실행 2025-01-09T12:00:01.000Z
// 1초마다 실행 2025-01-09T12:00:02.000Z
// ...
