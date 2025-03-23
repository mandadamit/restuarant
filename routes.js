const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to the restaurant home page.",
        status: "success",
        data: {
            name: "Amit's Restaurant",
            location: "Jaipur, India",
            cuisine: "Indian, Chinese, Italian",
            rating: 4.5
        }
    });
})

module.exports = router;