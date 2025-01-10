const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
  console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.log('error :', err);
});



// $ node createReadStream
// data : <Buffer ec a0 80 eb a9 94 20 ec a1 b0 eb b8 88 20 ec 88 9a> 16
// data : <Buffer 20 ec a1 b0 eb b8 88 20 ec a1 b0 eb b8 88 20 ec 88 9a> 16
// data : <Buffer ec a0 80 eb b2 84 20 ec a1 b0 eb b8 88 20 ec 88 9a eb a1 b0 eb b8 88> 16
// data : <Buffer 20 ec a1 b0 eb b8 88 20 ec 88 9a eb b2 84 ec 88 9a> 16
// end : 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
