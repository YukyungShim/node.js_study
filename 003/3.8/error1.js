setInterval(() => {
    console.log('시작');
    try {
      throw new Error('서버를 고장내주마!');
    } catch (err) {
      console.error(err);
    }
  }, 1000);
  


//   $ node error1
// 시작
// Error: 서버를 고장내주마!
// ...
// 시작
// Error: 서버를 고장내주마!
// ...
// // 계속 반복
