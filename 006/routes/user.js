const express = require('express');
const app = express();
const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

module.exports = router;
