// const express = require('express');
// const path = require('path');

// const app = express();
// app.set('port', process.env.PORT || 3030);

// app.get('/', (req, res) => {
//     // res.send('Hello, Express');
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });



// const express = require('express');
// const path = require('path');

// const app = express();
// app.set('port', process.env.PORT || 3030);

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     next();
// });

// app.get('/', (req, res, next) => {
//     console.log('GET / 요청에서만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
// });

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send(err.message);
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });



// const express = require('express');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const dotenv = require('dotenv');
// const path = require('path');

// dotenv.config();
// const app = express();
// app.set('port', process.env.PORT || 3000);

// app.use(morgan('dev'));
// app.use('/', express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.COOKIE_SECRET));
// app.use(session({
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     },
//     name: 'session-cookie',
// }));

// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// try {
//     fs.readdirSync('uploads');
// } catch (error) {
//     console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//     fs.mkdirSync('uploads');
// }

// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//     }),
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
// });

// app.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, 'multipart.html'));
// });

// app.post('/upload', upload.single('image'), (req, res) => {
//     console.log(req.file); // 업로드된 파일 정보
//     res.send('ok');
// });

// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     next();
// });

// app.get('/', (req, res, next) => {
//     console.log('GET / 요청에서만 실행됩니다.');
//     next();
// }, (req, res) => {
//     throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
// });

// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send(err.message);
// });

// app.listen(app.get('port'), () => {
//     console.log(app.get('port'), '번 포트에서 대기 중');
// });




const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

dotenv.config();
const indexRouter = require('./routes'); // index 라우터
const userRouter = require('./routes/user'); // user 라우터

const app = express();
app.set('port', process.env.PORT || 3040);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie',
}));

// // 업로드 폴더 생성
// try {
//     fs.readdirSync('uploads');
// } catch (error) {
//     console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//     fs.mkdirSync('uploads');
// }

// // multer 설정
// const upload = multer({
//     storage: multer.diskStorage({
//         destination(req, file, done) {
//             done(null, 'uploads/');
//         },
//         filename(req, file, done) {
//             const ext = path.extname(file.originalname);
//             done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//         },
//     }),
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
// });

// 라우터 설정
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
    res.status(404).send("Not Found");
});

// // 파일 업로드 라우트
// app.get('/upload', (req, res) => {
//     res.sendFile(path.join(__dirname, 'multipart.html'));
// });

// app.post('/upload', upload.single('image'), (req, res) => {
//     console.log(req.file); // 업로드된 파일 정보
//     res.send('ok');
// });

// // 공통 요청 처리
// app.use((req, res, next) => {
//     console.log('모든 요청에 다 실행됩니다.');
//     next();
// });

// 에러 처리
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
