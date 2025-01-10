const os = require('os');

console.log('운영체제 정보-----------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로-------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보---------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());



// $ node os
// 운영체제 정보-----------------------
// os.arch(): x64
// os.platform(): win32
// os.type(): Windows_NT
// os.uptime(): 53354
// os.hostname(): DESKTOP-RRANDNC
// os.release(): 10.0.18362

// 경로-------------------------------
// os.homedir(): C:\Users\zerocho
// os.tmpdir(): C:\Users\zerocho\AppData\Local\Temp

// cpu 정보---------------------------
// os.cpus(): [
//   { model: 'Intel(R) Core(TM) i5-9400F CPU @ 2.90GHz', speed: 2904, 
//     times: { user: 970250, nice: 0, sys: 1471906, idle: 9117578, irq: 359109 } 
//   },
//   ...
// ]
// os.cpus().length: 6

// 메모리 정보------------------------
// os.freemem(): 23378612224
// os.totalmem(): 34281246720
