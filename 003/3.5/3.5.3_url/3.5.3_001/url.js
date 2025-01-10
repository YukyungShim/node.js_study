const url = require('url'); // URL 모듈은 Node.js 내장 모듈입니다.

const { URL } = url;

const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));



// $ node url.js
// new URL(): URL {
//   href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor',
//   origin: 'http://www.gilbut.co.kr',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'www.gilbut.co.kr',
//   hostname: 'www.gilbut.co.kr',
//   port: '',
//   pathname: '/book/bookList.aspx',
//   search: '?sercate1=001001000',
//   searchParams: URLSearchParams { 'sercate1' => '001001000' },
//   hash: '#anchor'
// }
// url.format(): http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor
