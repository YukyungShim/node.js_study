const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8080, () => { // 서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다!');
});


// (project_django) C:\Users\yukyu\OneDrive\Desktop\0. GIS 관제 프로젝트\공부자료_Node.js\Node.js_study\004\4.1>node server1_1
// 8000번 포트에서 서버 대기 중입니다!