const express = require('express');
const app = express();
const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
    res.send('Hello, Express');
});

module.exports = router;
