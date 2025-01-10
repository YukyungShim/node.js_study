import dns from 'dns/promises';

const ip = await dns.lookup('gilbut.co.kr');
console.log('IP:', ip);

const a = await dns.resolve('gilbut.co.kr', 'A');
console.log('A:', a);

const mx = await dns.resolve('gilbut.co.kr', 'MX');
console.log('MX:', mx);

const cname = await dns.resolve('www.gilbut.co.kr', 'CNAME');
console.log('CNAME:', cname);

const any = await dns.resolve('gilbut.co.kr', 'ANY');
console.log('ANY:', any);



// $ node dns.mjs
// IP: { address: '49.236.151.220', family: 4 }
// A: [ '49.236.151.220' ]
// MX: [
//   { exchange: 'alt2.aspmx.l.google.com', priority: 5 },
//   { exchange: 'aspmx3.googlemail.com', priority: 10 },
//   { exchange: 'aspmx2.googlemail.com', priority: 10 },
//   { exchange: 'aspmx.l.google.com', priority: 1 },
//   { exchange: 'alt1.aspmx.l.google.com', priority: 5 }
// ]
// CNAME: [ 'slb-1088813.ncloudslb.com' ]
// ANY: [
//   { address: '49.236.151.220', ttl: 14235, type: 'A' },
//   { value: 'ns1-2.ns-ncloud.com', type: 'NS' },
//   { value: 'ns1-1.ns-ncloud.com', type: 'NS' },
//   {
//     hostmaster: 'ns1-2.ns-ncloud.com',
//     serial: 32,
//     refresh: 21600,
//     retry: 1800,
//     expire: 1209600,
//     minttl: 300,
//     type: 'SOA'
//   }
// ]


